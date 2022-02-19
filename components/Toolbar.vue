<template>
  <header class="shadow-xl">
    <div class="flex px-1 md:px-6 py-3 justify-between items-center">
      <div class="flex items-center">
        <div class="font-black inline text-xl cursor-pointer">
          <img src="logo-black.png" class="w-20 h-8" alt="" srcset="" />
        </div>
        <ul class="menu ml-4 items-center hidden md:inline custom-font-14 pl-4">
          <li class="inline mx-2 cursor-pointer select-none active">首页</li>
          <li class="inline mx-2 cursor-pointer select-none">工具</li>
          <li class="inline mx-2 cursor-pointer select-none">文章</li>
          <li class="inline mx-2 cursor-pointer select-none">源码</li>
        </ul>
      </div>
      <div class="flex">
        <search-box class="hidden md:block" />
        <div class="login-group flex mx-4 custom-font-14">
          <div class="cursor-pointer select-none h-8 mx-1 px-2 leading-8 bg-gray-100">登陆</div>
          <div class="cursor-pointer select-none h-8 mx-1 px-2 leading-8 bg-gray-100 hidden md:block">注册</div>
          <div v-show="false" class="cursor-pointer select-none h-8 mx-1 px-2 leading-8 bg-gray-100">我的</div>
        </div>
      </div>
    </div>
    <login />
  </header>
</template>

<script>
export default {
  name: "Toolbar",
};
</script>

<style scoped>
header {
  background: white;
}
.menu > li:hover,
.active {
  color: #3955f6;
  font-weight: 900;
}
</style>>