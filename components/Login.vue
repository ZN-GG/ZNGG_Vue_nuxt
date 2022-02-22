<template>
  <div
    v-show="this.$store.state.user.isLogin"
    class="modal-show flex items-center w-full h-full fixed top-0 left-0 z-50 bg-gray-500 opacity-100 justify-center"
  >
    <div class="modal-content bg-white w-80 pt-12 p-4 relative rounded-md">
      <Close class="right-0 top-0 absolute m-2 w-5 h-5" @click="close()" />
      <img
        class="left-0 top-0 w-20 absolute m-2"
        src="/logo-black.png"
        alt=""
      />
      <p class="text-2xl font-semibold my-2">登陆</p>
      <input
        type="text"
        placeholder="用户名"
        class="bg-gray-100 border-0 border-transparent focus:outline-none custom-font-14 text-gray-600 p-2 my-2 w-full"
      />
      <input
        type="password"
        placeholder="密码"
        class="bg-gray-100 border-0 border-transparent focus:outline-none custom-font-14 text-gray-600 p-2 my-2 w-full"
      />
      <div class="flex items-center justify-around">
        <input
          type="text"
          placeholder="验证码"
          class="bg-gray-100 w-3 border-0 border-transparent focus:outline-none custom-font-14 text-gray-600 p-2 my-2 mr-2 flex-1"
        />
        <img
          class="h-9 flex-1"
          @click="refreshCaptcha()"
          :src="captchaUrlPic"
          alt=""
        />
      </div>
      <button class="w-full bg-blue-500 text-white py-2 my-2">登陆</button>
    </div>
  </div>
</template>

<script>
import { Close } from "@icon-park/vue/lib";

export default {
  components: {
    Close,
  },
  name: "Login",
  created() {},
  data() {
    return {
      isShow: false,
      captchaUrl:"http://127.0.0.1:8888/user/captcha?captcha_uuid=uuid",
      captchaUrlPic: "http://127.0.0.1:8888/user/captcha?captcha_uuid=uuid",
    };
  },
  props: {},
  methods: {
    close() {
      this.$store.commit("user/closeLogin");
    },
    refreshCaptcha() {
      this.captchaUrlPic = this.captchaUrl + "&t=" + new Date().getTime();
    },
  },
};
</script>

<style scoped>
.modal-show {
  background: rgba(0, 0, 0, 0.35);
  -webkit-backdrop-filter: saturate(180%) blur(25px);
  backdrop-filter: saturate(180%) blur(25px);
}
</style>
