<template>
  <div
    v-show="this.$store.state.user.loginShow"
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
        v-model="loginParams.email"
        type="text"
        placeholder="用户名"
        class="bg-gray-100 border-0 border-transparent focus:outline-none custom-font-14 text-gray-600 p-2 my-2 w-full"
      />
      <input
        v-model="loginParams.password"
        type="password"
        placeholder="密码"
        class="bg-gray-100 border-0 border-transparent focus:outline-none custom-font-14 text-gray-600 p-2 my-2 w-full"
      />
      <div class="flex items-center justify-around">
        <input
          v-model="captcha"
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
      <button class="w-full bg-blue-500 text-white py-2 my-2" @click="login()">
        登陆
      </button>

      <div class="mt-2 flex justify-between">
        <p class="custom-font-12">
          还没有账号？
          <a class="text-blue-600 cursor-pointer font-medium">立即注册</a>
        </p>
        <p class="custom-font-12">
          <a class="text-blue-600 cursor-pointer font-medium">忘记密码?</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Close } from "@icon-park/vue/lib";
import { api } from "../api/api";
import { nanoid } from "nanoid";
import Vue from "vue";

export default Vue.extend({
  components: {
    Close,
  },
  name: "Login",
  created() {},
  data() {
    return {
      captchaUrl: "",
      captchaUrlPic: "",
      loginParams: {
        email: "",
        password: "",
      },
      captcha: "",
      captchaKey: "",
    };
  },
  beforeMount() {
    let uuid = nanoid(10);
    this.captchaKey = uuid;
  },
  computed: {
    isShow(){
      return this.$store.state.user.loginShow
    }
  },
  watch: {
    isShow(n,o){
      if (n) {
        this.captchaUrl = "http://127.0.0.1:8888/user/captcha?captcha_uuid="
        this.refreshCaptcha()
      }else{
        this.captchaUrl = ""
      }
    }
  },
  methods: {
    close() {
      this.$store.commit("user/closeLogin");
    },
    refreshCaptcha() {
      this.captchaUrlPic =
        this.captchaUrl + this.captchaKey + "&t=" + new Date().getTime();
    },
    async login() {
      let result = await api.user.login(
        this.loginParams,
        this.captcha,
        this.captchaKey
      );
      this.refreshCaptcha();
      this.captcha = "";
      if (result.success) {
        console.log("登陆成功");
        this.$store.commit("localStorage/setToken", result.data.password);
        this.close();
      } else {
        this.$store.commit("localStorage/setToken", "");
        console.log("登陆失败");
      }
      console.log(result);
    },
  },
});
</script>

<style scoped>
.modal-show {
  background: rgba(0, 0, 0, 0.35);
  -webkit-backdrop-filter: saturate(180%) blur(25px);
  backdrop-filter: saturate(180%) blur(25px);
}
</style>
