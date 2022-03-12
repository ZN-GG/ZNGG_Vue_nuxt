<template>
  <div
    v-show="this.$store.state.user.loginShow"
    class="modal-show flex items-center w-full h-full fixed top-0 left-0 z-40 bg-gray-500 opacity-100 justify-center"
  >
    <div
      v-show="!isRegister"
      class="modal-content bg-white w-80 pt-12 p-4 relative rounded-md"
    >
      <span class="right-0 top-0 absolute m-2 w-5 h-5 iconfont icon-close" @click="close()" />
      <img
        class="left-0 top-0 w-20 absolute m-2"
        src="/logo-black.png"
        alt=""
      />
      <p class="text-2xl font-semibold my-2">登陆</p>
      <input
        v-model="loginParams.email"
        type="text"
        placeholder="邮箱地址"
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
      <button
        class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 my-2"
        @click="login()"
      >
        登陆
      </button>
      <div class="mt-2 flex justify-between">
        <p class="custom-font-12">
          还没有账号？
          <span
            @click="toRegister()"
            class="text-blue-600 cursor-pointer font-medium"
            >立即注册</span
          >
        </p>
        <p class="custom-font-12">
          <a class="text-blue-600 cursor-pointer font-medium">忘记密码?</a>
        </p>
      </div>
    </div>
    <div
      v-show="isRegister"
      class="modal-content bg-white w-80 pt-12 p-4 relative rounded-md"
    >
      <span class="right-0 top-0 absolute m-2 w-5 h-5 iconfont icon-close" @click="close()" />
      <img
        class="left-0 top-0 w-20 absolute m-2"
        src="/logo-black.png"
        alt=""
      />
      <p class="text-2xl font-semibold my-2">注册账号</p>
      <input
        v-model="registerParams.email"
        type="text"
        placeholder="邮箱地址"
        class="bg-gray-100 border-0 border-transparent focus:outline-none custom-font-14 text-gray-600 p-2 my-2 w-full"
      />
      <div class="flex">
        <input
          v-model="captchaEmail"
          type="text"
          placeholder="邮箱验证码"
          class="bg-gray-100 w-3 border-0 border-transparent focus:outline-none custom-font-14 text-gray-600 p-2 my-2 mr-2 flex-1"
        />
        <button
          @click="sendCaptcha()"
          class="flex-1 bg-blue-500 text-white p-2 my-2 custom-font-14 hover:bg-blue-600"
        >
          发送
        </button>
      </div>
      <input
        v-model="registerParams.name"
        type="text"
        placeholder="用户名"
        class="bg-gray-100 border-0 border-transparent focus:outline-none custom-font-14 text-gray-600 p-2 my-2 w-full"
      />
      <input
        v-model="registerParams.password"
        type="password"
        placeholder="密码"
        class="bg-gray-100 border-0 border-transparent focus:outline-none custom-font-14 text-gray-600 p-2 my-2 w-full"
      />
      <input
        v-model="repassword"
        type="password"
        placeholder="再输一遍密码"
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
      <button
        class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 my-2"
        @click="register()"
      >
        注册
      </button>

      <div class="mt-2 flex justify-between">
        <p class="custom-font-12">
          已有账号？
          <span
            @click="toLogin()"
            class="text-blue-600 cursor-pointer font-medium"
            >立即登陆</span
          >
        </p>
        <p class="custom-font-12">
          <a class="text-blue-600 cursor-pointer font-medium">忘记密码?</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { api } from "../api/api";
import { nanoid } from "nanoid";
import Vue from "vue";
import { TextUtils } from "../utils/TextUtils";

export default Vue.extend({
  components: {
  },
  name: "Login",
  created() {},
  data() {
    return {
      isRegister: false,
      captchaUrl: "",
      captchaUrlPic: "",
      loginParams: {
        email: "",
        password: "",
      },
      registerParams: {
        email: "",
        name: "",
        password: "",
      },
      captcha: "",
      captchaEmail: "",
      captchaKey: "",
      repassword: "",
    };
  },
  beforeMount() {
    let uuid = nanoid(10);
    this.captchaKey = uuid;
  },
  computed: {
    isShow() {
      return this.$store.state.user.loginShow;
    },
  },
  watch: {
    isShow(n, o) {
      if (n) {
        this.captchaUrl = "http://127.0.0.1:8888/user/user/captcha?captcha_uuid=";
        this.toLogin();
      } else {
        this.captchaUrl = "";
      }
    },
  },
  methods: {
    close() {
      this.$store.commit("user/closeLogin");
    },
    refreshCaptcha() {
      this.captchaUrlPic =
        this.captchaUrl + this.captchaKey + "&t=" + new Date().getTime();
    },
    toLogin() {
      this.isRegister = false;
      this.refreshCaptcha();
      this.clearData();
    },
    toRegister() {
      this.isRegister = true;
      this.refreshCaptcha();
      this.clearData();
    },
    clearData() {
      this.loginParams.email = "";
      this.loginParams.password = "";
      this.registerParams.email = "";
      this.registerParams.name = "";
      this.registerParams.password = "";
      this.captcha = "";
      this.captchaEmail = "";
    },
    async login() {
      if (!this.checkLogin()) return;
      let result = await api.user.login(
        this.loginParams,
        this.captcha,
        this.captchaKey
      );
      this.refreshCaptcha();
      this.captcha = "";
      if (result.success) {
        this.$toast.success(result.message);
        this.$store.commit("localStorage/setToken", result.data.password);
        this.close();
      } else {
        this.$store.commit("localStorage/setToken", "");
        this.$toast.error(result.message);
      }
      console.log(result);
    },
    async sendCaptcha() {
      if (!TextUtils.checkEmail(this.registerParams.email)) {
        this.$toast.info("邮箱格式不正确");
        return false;
      }
      let result = await api.user.sendEmailCaptcha(this.registerParams.email);
      if (result.success) {
        this.$toast.success(result.message);
      } else {
        this.$toast.error(result.message);
      }
    },
    async register() {
      if (!this.checkRegister()) return;

      let result = await api.user.register(
        this.registerParams,
        this.captchaEmail,
        this.captcha,
        this.captchaKey
      );
      this.refreshCaptcha();
      if (result.success) {
        this.$toast.success(result.message);
        this.toLogin();
      } else {
        this.$toast.error(result.message);
      }
    },
    checkLogin(): boolean {
      if (!TextUtils.checkEmail(this.loginParams.email)) {
        this.$toast.info("邮箱格式不正确");
        return false;
      }
      if (TextUtils.isNullOrEmpty(this.loginParams.password)) {
        this.$toast.info("密码不能为空");
        return false;
      }
      if (TextUtils.isNullOrEmpty(this.captcha)) {
        this.$toast.info("验证码不能为空");
        return false;
      }

      return true;
    },
    checkRegister(): boolean {
      if (!TextUtils.checkEmail(this.registerParams.email)) {
        this.$toast.info("邮箱格式不正确");
        return false;
      }
      if (TextUtils.isNullOrEmpty(this.captchaEmail)) {
        this.$toast.info("邮箱验证码不能为空");
        return false;
      }
      if (
        TextUtils.isNullOrEmpty(this.registerParams.password) &&
        TextUtils.isNullOrEmpty(this.repassword)
      ) {
        this.$toast.info("密码不能为空");
        return false;
      }
      if (
        TextUtils.isNullOrEmpty(this.registerParams.password) &&
        TextUtils.isNullOrEmpty(this.repassword)
      ) {
        this.$toast.info("密码不能为空");
        return false;
      }
      if (this.registerParams.password != this.repassword) {
        this.$toast.info("两次输入的密码不一致");
        return false;
      }
      if (TextUtils.isNullOrEmpty(this.captcha)) {
        this.$toast.info("验证码不能为空");
        return false;
      }

      return true;
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
