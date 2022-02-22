<template>
  <div
    v-show="this.$store.state.todos.isShow"
    class="modal-show flex items-center w-full h-full fixed top-0 left-0 z-50 bg-gray-500 opacity-100"
  >
    <div class="bg-white w-11/12 p-6 relative">
      <Close />
      <!-- <img src="/logo-black.png" alt=""> -->
    </div>
  </div>
</template>

<script>
import { Close } from "@icon-park/vue/lib";

export default {
  comments: {
    Close,
  },
  name: "Login",
  created() {},
  data() {
    return {
      isShow: false,
    };
  },
  props: {},
  methods: {},
};
</script>

<style scoped>
.modal-show {
  background: rgba(0, 0, 0, 0.35);
  -webkit-backdrop-filter: saturate(180%) blur(25px);
  backdrop-filter: saturate(180%) blur(25px);
}
</style>
