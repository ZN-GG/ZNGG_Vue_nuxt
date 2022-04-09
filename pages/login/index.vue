<template>
  <div></div>
</template>

<script>
export default {


    mounted(){
        this.$store.commit("user/login");
    }

}
</script>

<style>

</style>