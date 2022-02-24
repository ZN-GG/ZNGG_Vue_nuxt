<template>
  <div ref="html">
    <div class="mx-auto container mt-8">
      <div ref="container" class="bg-white p-6 rounded-md my-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <p class="font-semibold text-2xl">
              {{ this.$route.params.category }}
            </p>
            <p class="hidden lg:inline leading-8 mx-4 text-sm text-gray-400">
              今夕何夕，见此良人
            </p>
          </div>
          <div>
            <div class="btn-1" @click="fetchSomething()">更多</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "",
    };
  },
  methods: {},
};
</script>

<style></style>
