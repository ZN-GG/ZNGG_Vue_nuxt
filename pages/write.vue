<template>
  <div class="p-4">
    <Editor
      class="h-96"
      :value="value"
      :plugins="plugins"
      @change="handleChange"
    />
  </div>
</template>

<script>
import "bytemd/dist/index.css";
import { Editor, Viewer } from "@bytemd/vue";

import breaks from "@bytemd/plugin-breaks";
import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import math from "@bytemd/plugin-math";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import mermaid from "@bytemd/plugin-mermaid";

import "juejin-markdown-themes/dist/juejin.css";
import "highlight.js/styles/atom-one-dark.css";
const plugins = [
  breaks(),
  frontmatter(),
  gemoji(),
  gfm(),
  highlight(),
  math(),
  mediumZoom(),
  mermaid(),
  // Add more plugins here
];

export default {
  layout: "Empty",
  components: { Editor },
  data() {
    return { value: "", plugins };
  },
  methods: {
    handleChange(v) {
      this.value = v;
    },
  },
};
</script>

<style>
.bytemd {
  height: calc(100vh - 20px);
}
.bytemd button,
.bytemd input,
.bytemd optgroup,
.bytemd select,
.bytemd textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: normal;
  color: inherit;
  margin: 0;
  padding: 0;
}

.bytemd ol {
  list-style: revert;
  margin: 20px;
}
.bytemd ul {
  list-style :square;
  margin: 20px;
}

.bytemd h1, .bytemd h2, .bytemd h3, .bytemd h4, .bytemd h5, .bytemd h6 {
    font-weight: bold;
}
</style>