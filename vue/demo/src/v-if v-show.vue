<template>
  <div>
    <h2>当前n的值是：{{n}}</h2>
    <button @click="n++">点我n+1</button>

    <h2 v-show="false">你好</h2>

    <h2 v-if="n === 0">Angular</h2>
    <h2 v-else-if="n === 1">React</h2>
    <h2 v-else-if="n === 2">Vue</h2>
    <h2 v-else>哈哈哈</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0
    }
  }
}
</script>

<style>

</style>