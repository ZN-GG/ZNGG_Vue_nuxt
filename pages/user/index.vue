<template>
  <div>
    <div class="flex container mx-auto my-6">
      <div class="w-2/12">
        <div class="w-full bg-white rounded p-4">
          <LeftContents />
        </div>
      </div>
      <div class="w-8/12">
        <div class="w-full bg-white rounded mx-2 p-4">
          <nuxt-child />
        </div>
      </div>
      <div class="w-2/12">
        <div class="w-full bg-white rounded mx-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftContents from "~/components/user/LeftContents.vue";
export default {
  components: {
    LeftContents,
  },
  middleware: "userAuth",
};
</script>

<style lang='postcss' scoped>
</style>

