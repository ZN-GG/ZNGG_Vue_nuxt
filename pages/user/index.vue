<template>
  <div>
    <div v-show="this.$store.state.localStorage.token.length > 0"></div>
    <div v-show="this.$store.state.localStorage.token.length > 0"></div>
    未登录
  </div>
</template>

<script>
export default {
    middleware: 'userAuth',
};
</script>

<style></style>
