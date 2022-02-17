<template>
  <div class="top-search mobile-hidden">
    <form
      method="get"
      action="https://www.52xueba.com"
      class="mobile-search-input b2-radius"
    >
      <div class="top-search-button">
        <a href="javascript:void(0)" class="top-search-select"
          ><span style="">文章</span><i class="b2font b2-arrow-down-s-line"></i
        ></a>
        <div class="header-search-select b2-radius" style="display: none">
          <a href="javascript:void(0)" class="select b2-radius">文章</a
          ><a href="javascript:void(0)" class="b2-radius">用户</a
          ><a href="javascript:void(0)" class="b2-radius">商铺</a
          ><a href="javascript:void(0)" class="b2-radius">文档</a
          ><a href="javascript:void(0)" class="b2-radius">快讯</a
          ><a href="javascript:void(0)" class="b2-radius">圈子话题</a>
        </div>
      </div>
      <input
        type="text"
        name="s"
        autocomplete="off"
        placeholder="搜索"
        class="search-input b2-radius"
      />
      <input type="hidden" name="type" value="post" />
      <button class="search-button-action">
        <i class="b2font b2-search-line"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBox2",
};
</script>

<style scoped>
.social-top .top-search {
    margin-right: 16px;
}
.top-search {
    position: relative;
}
.mobile-hidden {
    display: block;
}
.top-search form {
    display: flex;
    background-color: rgb(204 204 204/21%);
}
.b2-radius {
    border-radius: 4px;
}
.top-search-button {
    display: flex;
    white-space: nowrap;
    align-items: center;
    font-size: 12px;
}
.top-search-select {
    cursor: pointer;
    display: block;
    padding: 0 16px;
    height: 19px;
    line-height: 19px;
    color: initial;
    border-right: 1px solid #DEE1E4;
    color: inherit;
}
a {
    text-decoration: none;
    vertical-align: top;
}
.top-search .header-search-select {
    position: absolute;
    flex-flow: column;
    top: 37px;
    background: #fff;
    left: 0;
    border: 1px solid #F5F6F7;
    padding: 5px;
}
.header-search-select a {
    padding: 9px 14px;
    color: #333;
    margin-bottom: 5px;
}
.top-search input {
    color: #121212;
    fill: #121212;
}
.top-search input {
    padding: 8px 37px 8px 8px;
    width: 150px;
    background: none;
    border: 0;
}
button, input[type="text"], input[type="password"], input[type="number"], textarea {
    -webkit-appearance: none;
    outline: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
input, textarea {
    caret-color: #0066ff;
}
input, textarea {
    color: #666;
    resize: none;
}
input, textarea {
    border-radius: 4px;
}
.search-button-action {
    background: none;
    border: 0;
    position: absolute;
    right: -5px;
    top: 0;
    color: inherit;
}
button, .button {
    border-radius: 4px;
    color: #fff;
    padding: 8px 16px;
    transition: opacity .2s;
    position: relative;
    cursor: pointer;
    font-size: 12px;
    margin: 0;
    white-space: nowrap;
}
button, select {
    text-transform: none;
}
.b2font {
    font-family: "b2font" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.top-search input {
    padding: 8px 37px 8px 8px;
    width: 150px;
    background: none;
    border: 0;
}
.top-search-select {
    cursor: pointer;
    display: block;
    padding: 0 16px;
    height: 19px;
    line-height: 19px;
    color: initial;
    border-right: 1px solid #DEE1E4;
    color: inherit;
}
</style>