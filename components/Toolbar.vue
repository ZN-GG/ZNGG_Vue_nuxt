<template>
  <header class="shadow-xl">
    <div class="flex px-1 md:px-6 py-4 justify-between items-center">
      <div class="flex items-center">
        <div class="font-black inline text-xl cursor-pointer">
          <a href="/"
            ><img src="/logo-black.png" class="w-20 h-8" alt="" srcset=""
          /></a>
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
      <div class="flex items-center">
        <search-box class="block rounded-md" />
        <div
          class="
            login-group
            flex
            mx-2
            lg:mx-4
            custom-font-14
            items-center
            leading-8
          "
        >
          <p
            @click="login()"
            v-show="!this.$store.state.user.isLogin"
            class="
              cursor-pointer
              select-none
              mx-1
              px-3
              md:px-5
              text-white
              bg-blue-500
              rounded-md
            "
          >
            登陆
          </p>
          <nuxt-link
            to="/user"
            v-show="this.$store.state.user.isLogin"
            class="
              cursor-pointer
              select-none
              mx-1
              px-3
              md:px-5
              bg-gray-100
              rounded-md
            "
          >
            我的
          </nuxt-link>
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
        // {
        //   link: "sourcecode",
        //   name: "源码",
        // },
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
    userCenter() {
      this.$router.push("/user")
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

.icon-category {
  font-size: 24px;
}
</style>
>
