<template>
  <div>
    <h1>n的值：{{num}}</h1>
    <!-- v-on:事件 -->
    <button v-on:click="num++">点击n+1</button><br/><br>
    <!-- 可以简写为@事件名 -->
    <button @click="fn">点我n+2</button><br/><br>
    <!-- 传参 -->
    <button @click="fn1(3)">点我n+3</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num : 0
    }
  },
  methods: {
    fn() {
      this.num += 2;
    },
    fn1(num) {
      this.num += num;
    }
  }
}
</script>

<style>

</style>