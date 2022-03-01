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
                class="relative bg-gray-100 pl-3 pr-6 cursor-pointer rounded-md"
              >
                <span
                  class="custom-font-14 leading-8 relative inline select-none"
                  >分类
                  <span :class="isShowCategory ? 'reverse' : ''">
                    <down class="i-down" theme="filled" />
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div
            v-show="isShowCategory"
            :class="isShowCategory ? '' : 'hidden'"
            class="flex py-3 space-x-4 flex-none overflow-auto"
          >
            <div class="btn-2">前端</div>
            <div class="btn-2">后端</div>
            <div class="btn-2">UI设计</div>
            <div class="btn-2">自媒体运营</div>
            <div class="btn-2">视频剪辑</div>
            <div class="btn-2">安卓</div>
          </div>
          <ul>
            <li v-for="(item, index) in articleList" :key="index" class="mt-4">
              <div class="border-b pb-2">
                <div class="flex">
                  <div class="flex-1 mr-6">
                    <nuxt-link
                      :to="'/read/post/' + item.id"
                      class="
                        font-semibold
                        text-lg
                        h-8
                        leading-8
                        w-full
                        overflow-hidden
                      "
                    >
                      {{ item.title }}
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
                      {{ item.meta }}
                    </p>
                    <ul class="flex items-center mt-6">
                      <li class="flex items-center leading-4">
                        <PreviewOpen class="flex items-center" /><span
                          class="custom-font-12 ml-1"
                          >1887</span
                        >
                      </li>
                      <li class="flex items-center leading-4 ml-4">
                        <ThumbsUp class="flex items-center" /><span
                          class="custom-font-12 ml-1"
                          >1887</span
                        >
                      </li>
                      <li class="flex items-center leading-4 ml-4">
                        <Comments class="flex items-center" /><span
                          class="custom-font-12 ml-1"
                          >1887</span
                        >
                      </li>
                    </ul>
                  </div>
                  <img
                    class="flex-none w-32 h-24"
                    src="img.webp"
                    alt=""
                    srcset=""
                  />
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
import { ThumbsUp, PreviewOpen, Comments, Down } from "@icon-park/vue/lib";

export default {
  components: {
    ThumbsUp,
    PreviewOpen,
    Comments,
    Down,
  },
  name: "read",
  data() {
    return {
      isShowCategory: true,
      isRightFixedContainer: false,
      rightFixedContainerRight: 0,
      rightFixedContainerWidth: "33.333333%",
      articleList: [
        {
          id: "3214421321312",
          title: "零代码真香：但还离不开程序员",
          meta: "20年年底，一位同事去新公司做背调。电话打过来，是对方公司的CEO，互相介绍了一下公司业务，他们是做零代码开发的，说是企业的后台系统都可以胜任。",
          img: "",
        },
      ],
    };
  },
  created() {
    var i = 0;
    for (i; i < 10; i++) {
      this.articleList.push(this.articleList[0]);
    }
  },
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
    },
    showCategory() {
      this.isShowCategory = !this.isShowCategory;
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

.i-down {
  padding: 0 4px;
  position: absolute;
  top: 50%;
  transform: translateY(calc(-50% - 1.5px));
}
svg {
  @apply duration-100;
}
.reverse svg {
  transform: rotate(180deg);
}
</style>
