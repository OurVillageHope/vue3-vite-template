import axios from "axios";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();
const instance = axios.create({
  baseURL: import.meta.env.VUE_BASE_URL_API,
  timeout: 10000,
});

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    let token = "";
    if (token) {
      config.headers["Authorization"] = "Bearer " + token; // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    const status = res.data.status || 0;
    const errorCode = {
      401: "认证失败，无法访问系统资源",
      403: "当前操作没有权限",
      404: "访问资源不存在",
      default: "系统未知错误，请反馈给管理员",
    };
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode["default"];
    if (code === 401) {
      ElMessageBox.alert("登录状态已过期，请重新登录", "系统提示", {
        confirmButtonText: "重新登录",
        showClose: false,
        callback: () => {
          router.replace("/login");
        },
      });
      return Promise.reject("无效的会话，或者会话已过期，请重新登录。");
    } else if (code === 500 || status === 9) {
      ElMessage({
        message: msg,
        type: "error",
      });
      return Promise.reject(msg);
    } else if (code !== 200) {
      ElMessage({
        message: msg,
        type: "error",
      });
      return Promise.reject(msg);
    } else {
      return res.data;
    }
  },
  (error) => {
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    ElMessage({
      message: message,
      type: "error",
      duration: 5000,
    });
    return Promise.reject(error);
  }
);

export default instance;
