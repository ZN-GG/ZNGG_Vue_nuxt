<template>
  <div ref="html">
    <div class="mx-auto container">
      <div class="flex flex-wrap relative">
        <div
          class="bg-white p-6 rounded-md mt-4 w-full lg:w-8/12 lg:mr-4"
          ref="leftNormalContainer"
        >
          <div v-if="isSuccess" class="">
            <div class="">
              <p class="font-semibold w-full text-xl lg:text-3xl">
                {{ article.title }}
              </p>
              <div class="flex py-4 w-fll justify-between items-center">
                <div class="flex items-center">
                  <img
                    :src="article.user.avatar"
                    class="w-10 h-10 rounded-full"
                  />
                  <div class="ml-2">
                    <p class="custom-font-16" v-text="article.user.name"></p>
                    <p class="custom-font-14 text-gray-500">
                      {{ article.updateTime }}&nbsp;&nbsp;&nbsp;&nbsp;阅读：{{
                        article.viewCount
                      }}
                    </p>
                  </div>
                </div>
                <div class="">
                  <a href="#">
                    <p class="btn-2 w-auto">{{ article.category.name }}</p>
                  </a>
                </div>
              </div>
              <article
                class="w-full mt-8 prose max-w-none"
                v-html="article.content"
              ></article>
            </div>
          </div>
          <div class="h-80 relative" v-else>
            <div class="absolute empty items-center text-2xl">
              <Endless />
              <p class="text-gray-700">没有找到该文章！</p>
              <p>
                <a href="/" class="text-blue-600 custom-font-14 my-4"
                  >返回首页</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../../../api/api";
import { Endless } from "@icon-park/vue/lib";

export default {
  scrollToTop: true,
  components: {
    Endless,
  },
  async asyncData({ app, params }) {
    let isSuccess = false;
    const result = await api.article.getDetail(params.id);
    if (!result.success) {
      return;
    }
    isSuccess = true;
    const article = result.data;
    return {
      isSuccess,
      article,
    };
  },
  mounted() {
  },
};
</script>

<style scoped>
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

.empty {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
