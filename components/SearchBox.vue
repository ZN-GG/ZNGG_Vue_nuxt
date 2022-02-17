<template>
  <div class="flex h-10 w-80 bg-gray-100">
    <a class="px-4 text-sm inline-flex">
      <span class="custom-font-14 leading-10 relative inline"
        >工具<down/></span>
    </a>
    <span class=" m-2 custom-line-right"></span>
  </div>
</template>

<script>
import { Down } from "@icon-park/vue";

export default {
  components: {
    Down,
  },

  name: "SearchBox",
  data() {
    return {};
  },

  mounted() {},
};
</script>

<style scoped>
.custom-font-14 {
  font-size: 14px;
}
.custom-line-right {
  border-right: 1px solid #dee1e4;
}
.i-icon {
  padding: 0 4px;
  position: absolute;
  top: 50%;
  transform: translateY(calc(-50% - 1.5px));
}
</style>