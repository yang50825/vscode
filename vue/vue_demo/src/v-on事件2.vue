<template>
  <div>
    <h1>n的值：{{n}}</h1>
    <button v-on:click="n++">n++</button><br><br>
    <button @click="fn">n+2</button>
    <button @click="fn1(4096104503)">n+2</button>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      n:0
    }
  },
  methods: {
    fn() {
      this.n += 2;
    },

    fn1(num) {
      this.n += num;
    }
  }
}
</script>

<style>

</style>