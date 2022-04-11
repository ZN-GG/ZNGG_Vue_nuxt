<template>
  <div class="p-4">
    <div class="w-full mx-auto">
      <v-md-editor
        v-model="text"
        :disabled-menus="[]"
        height="400px"
      ></v-md-editor>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style>
</style>