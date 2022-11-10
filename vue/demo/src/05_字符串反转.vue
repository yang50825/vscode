<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="fn">反转世界</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello, world',
    }
  },
  methods: {
    fn() {
      let arr = this.msg.split('');
      this.msg = arr.reverse().join('');
    }
  }
}
</script>

<style>

</style>