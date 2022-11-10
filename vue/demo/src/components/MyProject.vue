<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }} 元</p>
    <p>{{ msg }}</p>
    <button @click="fn">砍一刀</button>
  </div>
</template>

<script>
export default {
  props: ['title', 'price', 'msg', 'index'],
  methods: {
    fn() {
      this.$emit('subPrice', this.index, 1)
    },
  },
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
