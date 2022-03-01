<template>
  <div ref="html">
    <div class="mx-auto container">
      <div class="flex flex-wrap relative">
        <div
          class="bg-white p-6 rounded-md mt-4 w-full lg:w-8/12 lg:mr-4"
          ref="leftNormalContainer"
        >
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <p class="font-semibold text-xl lg:text-3xl">
                vue终极性能优化方案，解决首页加载慢
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    console.log(params.id);
  },
};
</script>

<style>
.container {
  width: 100%;
  padding-right: 1rem /* 16px */;
  padding-left: 1rem /* 16px */;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
    padding-right: 2rem /* 32px */;
    padding-left: 2rem /* 32px */;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding-right: 4rem /* 64px */;
    padding-left: 4rem /* 64px */;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
    padding-right: 5rem /* 80px */;
    padding-left: 5rem /* 80px */;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
    padding-right: 6rem /* 96px */;
    padding-left: 6rem /* 96px */;
  }
}

.container {
  max-width: 100%;
}

@screen sm {
  .container {
    max-width: 100%;
  }
}

@screen md {
  .container {
    max-width: 100%;
  }
}

@screen lg {
  .container {
    max-width: 1400px;
  }
}

@screen xl {
  .container {
    max-width: 1400px;
  }
}
</style>
