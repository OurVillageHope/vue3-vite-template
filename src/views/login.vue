<template>
  <h1>登录页面</h1>
  <div class="box">
    <div>
      <label>
        账号：
        <input type="text" />
      </label>
      <label>
        密码：
        <input type="text" />
      </label>
    </div>
    <button @click="loginFn">登录</button>
  </div>
</template>

<script setup>
  import { ref, reactive } from "vue";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const loginFn = () => {
    router.replace("/");
  };
</script>

<style scoped lang="scss">
  .box {
    width: 500px;
    border: 1px solid red;
  }
</style>
