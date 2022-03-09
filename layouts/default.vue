<template>
  <div class="pb-5">
    <Toolbar />
    <nuxt-child />
    <div
      v-if="isShowToTop"
      @click="toTop()"
      class="
        to-top
        fixed
        right-4
        bottom-4
        bg-white
        rounded-full
        shadow
        p-2
        text-center
        items-center
        hover:bg-blue-500 hover:text-white
      "
    >
      <div class="w-6 h-6 font-black stroke-2"><ToTop /></div>
    </div>
  </div>
</template>

<script>
import { ToTop } from "@icon-park/vue/lib";

export default {
  components: {
    ToTop,
  },
  data() {
    return {
      isShowToTop: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.isShowToTop = true;
      } else {
        that.isShowToTop = false;
      }
    },
  },
};
</script>
<style>
</style>