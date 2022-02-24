<template>
  <header class="shadow-xl">
    <div class="flex px-1 md:px-6 py-4 justify-between items-center">
      <div class="flex items-center">
        <div class="font-black inline text-xl cursor-pointer">
          <img src="/logo-black.png" class="w-20 h-8" alt="" srcset="" />
        </div>
        <ul class="menu ml-4 items-center hidden md:inline custom-font-16 pl-4">
          <li class="inline mx-2 cursor-pointer select-none">
            <nuxt-link to="/" exact="">首页</nuxt-link>
          </li>
          <li
            v-for="(item, index) in dataList"
            :key="index"
            class="inline mx-2 cursor-pointer select-none"
          >
            <nuxt-link :to="{ name: item.link }">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="flex">
        <search-box class="block rounded-md" />
        <div class="login-group flex mx-2 lg:mx-4 custom-font-14">
          <div
            v-show="this.$store.state.localStorage.token.length == 0"
            class="cursor-pointer select-none h-8 mx-1 px-3 md:px-5 leading-8 text-white bg-blue-500 rounded-md"
            @click="login()"
          >
            登陆
          </div>
          <div
            v-show="this.$store.state.localStorage.token.length > 0"
            class="cursor-pointer select-none h-8 mx-1 px-3 md:px-5 leading-8 bg-gray-100 rounded-md"
            @click="logout()"
          >
            我的
          </div>
        </div>
      </div>
    </div>
    <login />
  </header>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      dataList: [
        {
          link: "tool",
          name: "工具",
        },
        {
          link: "read",
          name: "文章",
        },
        {
          link: "sourcecode",
          name: "源码",
        },
        {
          link: "friendlink",
          name: "友链",
        },
      ],
    };
  },

  created() {
    // console.log(this.$router.params.type);
  },
  methods: {
    login() {
      this.$store.commit("user/login");
    },
    logout() {
      this.$store.commit("localStorage/setToken", "");
    },
  },
};
</script>

<style scoped>
header {
  background: white;
}
.menu > li:hover,
.nuxt-link-active {
  color: #3955f6;
  font-weight: 900;
}
</style>
>
