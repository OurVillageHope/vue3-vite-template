<template>
  <h1 ref="666">首页</h1>
  <div class="box"></div>
</template>

<script setup>
  import { ref, reactive, onMounted, getCurrentInstance, onUnmounted } from "vue";
  import { ElMessage, ElMessageBox, dayjs } from "element-plus";
  import { useRouter } from "vue-router";
  const router = useRouter();
  // console.log("-----", dayjs().format("YYYY-MM-DDTHH:mm:ss"));
  // console.log(dayjs("2024-03-24T13:29:38").format("d"));

  // let timer = setTimeout(() => {
  //   ElMessageBox.alert("登录状态已过期，请重新登录", "系统提示", {
  //     confirmButtonText: "重新登录",
  //     showClose: false,
  //     callback: () => {
  //       router.replace("/login");
  //     },
  //   });
  // }, 5000);

  // onUnmounted(() => {
  //   if (timer) {
  //     clearTimeout(timer);
  //   }
  // });
</script>

<style lang="scss" scoped>
  .box {
    width: _vw(333);
    height: _vh(400);
    background-color: orange;
  }
</style>
