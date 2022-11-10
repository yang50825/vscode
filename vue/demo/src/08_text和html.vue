<template>
  <div>
    <p v-text="str"></p>
    <!-- 会覆盖插值表达式 -->
    <p v-html="str"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "<h1>我是一个粉刷匠</h1>",
    }
  }
}
</script>

<style>

</style>