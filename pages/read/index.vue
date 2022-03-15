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
              <p class="font-semibold text-2xl">最新文章</p>
              <p class="hidden lg:inline leading-8 mx-4 text-sm text-gray-400">
                仰观宇宙之大，俯察品类之盛
              </p>
            </div>
            <div>
              <div
                @click="showCategory()"
                class="relative bg-gray-100 px-3 cursor-pointer rounded-md"
              >
                <span
                  class="custom-font-14 leading-8 relative inline select-none"
                  >分类
                  <span
                    class="iconfont icon-arrow-down inline-block"
                    :class="isShowCategory ? 'reverse' : ''"
                  />
                </span>
              </div>
            </div>
          </div>

          <div
            v-show="isShowCategory"
            :class="isShowCategory ? '' : 'hidden'"
            class="flex py-3 space-x-4 flex-none overflow-auto"
          >
            <div
              v-for="(item, index) in categoryList"
              :key="index"
              class="btn-2"
            >
              {{ item.name }}
            </div>
          </div>
          <ul>
            <li v-for="(item, index) in articleList" :key="index" class="mt-4">
              <div class="border-b pb-2">
                <div class="flex relative">
                  <div class="flex-1 mr-6">
                    <nuxt-link target="_blank" :to="'/read/post/' + item.id">
                      <p
                        class="
                          font-semibold
                          text-base
                          h-8
                          leading-8
                          w-full
                          overflow-hidden
                        "
                      >
                        {{ item.title }}
                      </p>
                    </nuxt-link>
                    <p
                      class="
                        custom-font-14
                        leading-8
                        overflow-hidden
                        h-6
                        text-gray-400
                        mb-2
                      "
                    >
                      {{ item.summary }}
                    </p>
                    <ul class="flex items-center mt-6">
                      <li class="flex items-center leading-4">
                        <span class="flex items-center iconfont icon-browse" /><span
                          class="custom-font-12 ml-1"
                          >{{ item.viewCount }}</span
                        >
                      </li>
                      <li class="flex items-center leading-4 ml-1">
                        <span class="flex items-center iconfont icon-good" /><span
                          class="custom-font-12 ml-1"
                          >1887</span
                        >
                      </li>
                      <li class="flex items-center leading-4 ml-1">
                        <span class="flex items-center iconfont icon-comments" /><span
                          class="custom-font-12 ml-1"
                          >1887</span
                        >
                      </li>
                    </ul>
                  </div>
                  <div v-if="index % 4 != 0" class="flex-none w-32 h-24"></div>
                  <img
                    v-if="index % 4 != 0"
                    class="flex-auto w-32 h-24 absolute right-0"
                    src="img.webp"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </li>
            <li v-show="empty" class="mt-4 text-center">
              <p>到底了</p>
            </li>
            <li v-show="loading" class="mt-4 text-center animate-pulse">
              <div class="border-b pb-2">
                <div class="flex">
                  <div class="flex-1 mr-6">
                    <div class="bg-gray-200 h-6"></div>
                    <div
                      class="
                        mt-6
                        custom-font-14
                        leading-8
                        overflow-hidden
                        text-gray-400
                        mb-2
                        bg-gray-100
                        h-12
                      "
                    ></div>
                  </div>
                  <div class="flex-none bg-gray-200 w-32 h-24" />
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- 广而告之 -->
        <div
          v-bind:style="{
            right: rightFixedContainerRight + 'px',
            width: rightFixedContainerWidth,
          }"
          :class="[
            isRightFixedContainer
              ? 'RightFixedContainer-fixed'
              : 'RightFixedContainer-absolute',
          ]"
          class="ml-4 h-20 pl-6 my-4 hidden lg:block w-full lg:w-4/12"
          ref="rightFixedContainer"
        >
          <div class="bg-white rounded-md p-6">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <p class="font-semibold text-2xl">AD</p>
                <p
                  class="hidden lg:inline leading-8 mx-4 text-sm text-gray-400"
                >
                  广而告之
                </p>
              </div>
              <div>
                <div class="btn-1">更多</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/api/api";

export default {
  name: "read",
  async asyncData() {
    const articleResult = await api.article.getList(1, 10);
    let articleList = {};
    if (articleResult.success) {
      articleList = articleResult.data.content;
    }
    const categoryResult = await api.article.getCategories();
    let categoryList = {};
    if (categoryResult.success) {
      categoryList = categoryResult.data;
    }
    return {
      articleList,
      categoryList,
    };
  },
  data() {
    return {
      isShowCategory: true,
      isRightFixedContainer: false,
      rightFixedContainerRight: 0,
      rightFixedContainerWidth: "33.333333%",
      loading: false,
      empty: false,
      page: 2,
      size: 10,
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll, false); // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    setFloatContainer() {
      let leftNormalContainer = this.$refs.leftNormalContainer;
      if (
        leftNormalContainer.getBoundingClientRect().top <= 0 &&
        !this.isRightFixedContainer
      ) {
        let rightFixedContainer = this.$refs.rightFixedContainer;
        let right = leftNormalContainer.getBoundingClientRect().left;
        this.isRightFixedContainer = true;
        this.rightFixedContainerRight = right;
        this.rightFixedContainerWidth = rightFixedContainer.offsetWidth + "px";
      } else if (leftNormalContainer.getBoundingClientRect().top > 0) {
        this.rightFixedContainerRight = 0;
        this.rightFixedContainerWidth = "33.333333%";
        this.isRightFixedContainer = false;
      }
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; // 滚动条偏移量
      // let offsetTop = document.querySelector("#boxFixed").offsetTop; // 要滚动到顶部吸附的元素的偏移量
      // this.isFixed = scrollTop > offsetTop ? true : false; // 如果滚动到顶部了，this.isFixed就为true
      if (scrollTop > 20) {
        this.setFloatContainer();
      }

      let documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      if (documentHeight - scrollTop - window.innerHeight < 60 && !this.empty) {
        this.loadMore();
      }
    },
    showCategory() {
      this.isShowCategory = !this.isShowCategory;
    },
    async loadMore() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      const result = await api.article.getList(this.page, 10);
      if (result.success) {
        console.log(result.data.content.length);
        if (result.data.content.length == 0) {
          this.empty = true;
        }
        this.articleList = this.articleList.concat(result.data.content);
        this.page++;
      }
      this.loading = false;
    },
  },
};
</script>

<style lang="postcss">
.RightFixedContainer-absolute {
  @apply absolute;
}
.RightFixedContainer-fixed {
  @apply fixed top-2;
}
.border-t-1 {
  border-top-width: 1px;
}

.icon-arrow-down {
  @apply duration-100;
}
.reverse {
  transform: rotate(180deg);
}
</style>
