<template>
  <div class="bg-white">
    <section class="bg-gray-100">
      <div class="container px-4 mx-auto">
        <div class="md:flex md:-mx-4 md:items-center py-8">
          <div class="md:w-1/2 px-4">
            <p class="text-2xl text-black">一键去除多余CSS</p>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full container px-8 mx-auto py-12">
      <div class="flex">
        <div class="w-full pr-10">
          <p>html</p>
          <textarea
            id="html"
            autofocus
            class="
              text-gray-600
              w-full
              bg-gray-100
              boder-left boder-bottom
              outline-none
              p-5
            "
            rows="8"
            v-model="html"
          ></textarea>
        </div>
        <div class="w-full pl-10">
          <p>css</p>
          <div class="relative">
            <textarea
              id="css"
              autofocus
              class="
                text-gray-600
                w-full
                bg-gray-100
                boder-left boder-bottom
                outline-none
                p-5
              "
              rows="8"
              v-model="css"
            ></textarea>
            <span
              id="cssTagLength"
              class="
                absolute
                px-2
                py-1
                text-xs text-white
                bg-blue-500
                rounded
                right-4
                bottom-6
              "
              >{{css.length}}</span
            >
          </div>
        </div>
      </div>
      <div class="flex w-full justify-center">
        <button
          class="
            block
            m-2
            py-2
            px-4
            font-medium
            tracking-widest
            text-white
            uppercase
            bg-black
            shadow-lg
            focus:outline-none
            hover:bg-gray-900 hover:shadow-none
          "
          onclick="start(this)"
        >
          开始
        </button>
      </div>
      <div class="relative">
        <p>结果：</p>
        <textarea
          id="result"
          autofocus
          class="
            text-gray-600
            w-full
            bg-gray-100
            boder-left boder-bottom
            outline-none
            p-3
          "
          rows="8"
        ></textarea>
        <span
          id="resultTagLength"
          class="
            absolute
            px-2
            py-1
            text-xs text-white
            bg-blue-500
            rounded
            right-4
            bottom-6
          "
          >{{result.length}}</span
        >
      </div>

      <div class="flex w-full justify-center">
        <button
          class="
            block
            m-2
            py-2
            px-4
            font-medium
            tracking-widest
            text-white
            uppercase
            bg-black
            shadow-lg
            focus:outline-none
            hover:bg-gray-900 hover:shadow-none
          "
          onclick="toCopy(this)"
        >
          一键复制
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "uncss",
  data() {
    return {
        html:"",
        css:"",
        result:""
    };
  },
};
</script>

<style>
</style>
