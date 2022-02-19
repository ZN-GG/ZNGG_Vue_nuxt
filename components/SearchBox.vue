<template>
  <div class="flex h-8 w-72 bg-gray-100 relative">
    <a
      class="px-4 text-sm inline-flex select-none cursor-pointer"
      v-clickoutside="handleClose"
      @click="selectBtn()"
    >
      <span class="custom-font-14 leading-8 relative inline"
        >{{ searchType }}<down theme="filled"
      /></span>
    </a>
    <div v-show="selectShow" class="absolute bg-white px-3 py-1 border mt-1">
      <ul>
        <li v-for="item in selectList" :key="item" class="li-1" @click="select(item)">{{item}}</li>
      </ul>
    </div>
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
    <search class="ml-2 cursor-pointer" @click="search()" />
  </div>
</template>

<script>
import { Down, Search } from "@icon-park/vue/lib";

const clickoutside = {
  // 初始化指令
  bind(el, binding, vnode) {
    function documentHandler(e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false;
      }
      // 判断指令中是否绑定了函数
      if (binding.expression) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        binding.value(e);
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener("click", documentHandler);
  },
  update() {},
  unbind(el, binding) {
    // 解除事件监听
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  },
};

export default {
  components: {
    Down,
    Search,
  },

  name: "SearchBox",
  data() {
    return {
      selectShow: false,
      selectList: ["工具","文章","源码"],

      searchKey: "",
      searchType: "工具",
    };
  },
  directives: { clickoutside },
  mounted() {},
  methods: {
    search() {
      console.log("searchKey ==> " + this.searchKey);
    },
    handleClose(e) {
      this.selectShow = false;
    },
    selectBtn() {
      this.selectShow = !this.selectShow;
    },
    select(e) {
      this.searchType = e;
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