<template>
  <div>
    <button v-on:mouseover="fn">移过去</button>
    <h1>{{ count }}</h1>
    <input type="text" v-model.number="count" />
    <button v-on:click.stop="count++">n+1</button><br />
    <button @click="fn">n+2</button><br />
    <button @click="fn1(3)">n+3</button><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    fn() {
      this.count += 2;
      this.fn1(5);
    },

    fn1(num) {
      this.count += num;
    },
  },
};
</script>

<style>

</style>