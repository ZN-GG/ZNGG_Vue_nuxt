<template>
  <div ref="html">
    <!-- 今日推荐 -->
    <div class="mx-auto container mt-8">
      <div ref="container" class="bg-white p-6 rounded-md my-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <p class="font-semibold text-2xl">友情连接</p>
            <p class="hidden lg:inline leading-8 mx-4 text-sm text-gray-400">
              以文常会友，唯德自称邻
            </p>
          </div>
          <div>
            <div class="btn-1">更多</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "friendlink",
  data() {
    return {};
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; // 滚动条偏移量
      // let offsetTop = document.querySelector("#boxFixed").offsetTop; // 要滚动到顶部吸附的元素的偏移量
      // this.isFixed = scrollTop > offsetTop ? true : false; // 如果滚动到顶部了，this.isFixed就为true
    },
  },
});
</script>
<style lang="postcss">
.RightFixedContainer-absolute {
  @apply absolute;
}
.RightFixedContainer-fixed {
  @apply fixed top-2;
}
</style>
