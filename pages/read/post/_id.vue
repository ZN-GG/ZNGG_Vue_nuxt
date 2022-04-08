<template>
  <div ref="html">
    <div class="mx-auto container">
      <div class="flex flex-wrap relative">
        <div
          class="bg-white p-6 rounded-md mt-4 w-full lg:w-8/12"
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
              <span class="iconfont icon-cry" style="font-size: 24px" />
              <p class="text-gray-700">没有找到该文章！</p>
              <p>
                <a href="/" class="text-blue-600 custom-font-14 my-4"
                  >返回首页</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="mt-4 hidden lg:block w-full lg:w-4/12 absolute right-0">
          <div class="pl-6 w-full" ref="rightNormalContainer">
            <div class="w-full h-40 bg-red-400"></div>
            <div class="w-full h-40 bg-red-400"></div>
          </div>
          <div
            v-bind:style="{
              width: rightFixedContainerWidth,
            }"
            class="h-20 pl-6 my-4 hidden lg:block w-full"
            ref="rightFixedContainer"
          >
            <div v-show="docMenu.length > 0" class="bg-white rounded-md">
              <div class="flex justify-between items-center p-6">
                <div class="flex items-center">
                  <p class="font-semibold text-2xl">目录</p>
                  <p
                    class="
                      hidden
                      lg:inline
                      leading-8
                      mx-4
                      text-sm text-gray-400
                    "
                  >
                    Contents
                  </p>
                </div>
              </div>
              <hr class="mx-6" />
              <div>
                <ul class="article-contents overflow-y-auto py-2 px-6">
                  <li
                    v-for="(item, index) in docMenu"
                    :key="item.id"
                    :class="`level_${item.level}`"
                    class="leading-9 relative"
                  >
                    <a
                      :href="'#' + item.id"
                      :class="{ 'text-blue-600 active': tocActive === index }"
                      @click="handlerSroll($event, item.id, index)"
                      >{{ item.text }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingVue from "~/components/Loading.vue";
import { api } from "../../../api/api";

export default {
  scrollToTop: true,
  components: {},
  head() {
    return {
      link: [
        { ref: "stylesheet", href: require("~/assets/css/theme/vue.css") },
      ],
    };
  },
  async asyncData({ params }) {
    let isSuccess = false;
    const result = await api.article.getDetail(params.id);
    if (!result.success) {
      isSuccess = false;
    } else {
      isSuccess = true;
    }
    const article = result.data;
    return {
      isSuccess,
      article,
    };
  },
  data() {
    return {
      rightFixedContainerWidth: "100%",
      docMenu: [],
      tocActive: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, false); // 监听滚动事件，然后用handleScroll这个方法进行相应的处理

    // 生成目录
    let markMenu = [];
    const articleDom = document.querySelector("article");
    if (articleDom) {
      for (let ele of articleDom.children) {
        const i = ["h1", "h2", "h3", "h4", "h5", "h6"].indexOf(
          ele.tagName.toLowerCase()
        );
        if (i > -1 && ele.textContent) {
          ele.setAttribute("id", "markMenu_" + markMenu.length);
          ele.setAttribute("name", "markMenu_" + markMenu.length);
          markMenu.push({
            level: i,
            text: ele.textContent,
            id: "markMenu_" + markMenu.length,
            name: "markMenu_" + markMenu.length,
          });
        }
      }
    }
    console.log(markMenu);
    //docMenu为目录数据
    this.docMenu = markMenu;
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  created() {},
  methods: {
    setFloatContainer() {
      let rightNormalContainer = this.$refs.rightNormalContainer;
      let rightFixedContainer = this.$refs.rightFixedContainer;
      if (rightNormalContainer.getBoundingClientRect().bottom <= 0) {
        rightFixedContainer.style.position = "fixed";
        rightFixedContainer.style.top = "0.5rem";
        this.rightFixedContainerWidth = rightNormalContainer.offsetWidth + "px";
      } else if (rightNormalContainer.getBoundingClientRect().bottom > 0) {
        this.rightFixedContainerWidth = "100%";
        rightFixedContainer.style.top = "";
        rightFixedContainer.style.position = "absolute";
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

        // 获取所有锚点元素
        const titleNavList = document.querySelectorAll(
          "article h1,article h2,article h3,article h4,article h5,article h6"
        );

        // 计算所有锚点元素的 offsetTop 的高度
        const offsetTopList = [];
        titleNavList.forEach((item) => {
          offsetTopList.push(item.offsetTop);
        });

        // 获取当前文档流的 scrollTop
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        // 定义当前所在的目录下标
        let navIndex = 0;
        // 比较当前文章滚动的距离scrollTop与各锚点标题的offsetTop ,当scrollTop超过当前元素的scrollTop,则定位到当前标题
        for (let n = 0; n < offsetTopList.length; n++) {
          if (scrollTop >= offsetTopList[n]) {
            navIndex = n;
          }
        }
        //当前高亮的目录索引,默认为0
        this.tocActive = navIndex;
      }
    },
    handlerSroll(e, id) {},
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

.container {
  max-width: 1236px;
}

.empty {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.article-contents {
  max-height: 460px;
}
.article-contents::-webkit-scrollbar {
  width: 6px;
  height: 80px;
}

.article-contents::-webkit-scrollbar-track {
  box-shadow: none;
  border-radius: 4px;
}

.article-contents::-webkit-scrollbar-thumb {
  background-color: #e4e6eb;
  outline: none;
  border-radius: 4px;
}
.article-contents .level_1 {
  padding-left: 10px;
}
.article-contents .level_2 {
  padding-left: 20px;
}
.article-contents .level_3 {
  padding-left: 30px;
}
.article-contents .level_4 {
  padding-left: 40px;
}
.article-contents .level_5 {
  padding-left: 50px;
}
.article-contents .level_6 {
  padding-left: 60px;
}
.article-contents .active:before {
  content: "";
  position: absolute;
  left: -25px;
  margin-top: 10px;
  width: 4px;
  height: 16px;
  background: #1e80ff;
  border-radius: 0 4px 4px 0;
}
</style>
