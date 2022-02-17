<template>
  <header>
    <div class="flex p-4 justify-between items-center">
      <div class="flex items-center">
        <div class="font-black inline text-3xl">ZNGG</div>
        <ul class="text-base ml-4 inline items-center">
          <li class="inline mx-2">首页</li>
          <li class="inline mx-2">工具</li>
          <li class="inline mx-2">文章</li>
          <li class="inline mx-2">源码</li>
        </ul>
      </div>
      <div class="inline">
        <search-box />
      </div>
    </div>
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
</style>>