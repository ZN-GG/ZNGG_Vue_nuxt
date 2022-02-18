<template>
  <div class="flex h-8 w-72 bg-gray-100 relative">
    <a
      class="px-4 text-sm inline-flex select-none cursor-pointer"
    >
      <span class="custom-font-14 leading-8 relative inline"
        >工具<down theme="filled"
      /></span>
    </a>
    <span class="m-2 custom-line-right"></span>
    <input
      class="
        w-40
        bg-gray-100
        border-0 border-transparent
        focus:outline-none
        custom-font-14
        text-gray-600
      "
      v-model="searchKey"
      type="text"
    />
    <search class="ml-2 cursor-pointer" @click="search()"/>
  </div>
</template>

<script>
import { Down, Search } from "@icon-park/vue/lib";

export default {
  components: {
    Down,
    Search,
  },

  name: "SearchBox",
  data() {
    return {
      searchType: "",
      searchKey: "",
    };
  },

  mounted() {},
  methods: {
    search() {
      console.log("searchKey ==> " + this.searchKey);
    },
  },
};
</script>

<style scoped>
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