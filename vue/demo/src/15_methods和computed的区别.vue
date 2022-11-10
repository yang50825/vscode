<template>
  <div>
    <p>{{msg}}</p>
    <p>{{reverseMsg}}</p>
    <p>{{getMsg()}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello, vue',
    }
  },
  computed: {
    reverseMsg() {
      console.log('计算属性执行了');
      return this.msg.split("").reverse().join("");
      //计算属性优势：1.有缓存
      //2.计算执行完成之后，会把return 的值缓存取来
      //3.依赖值不变的情况下，调用缓存中的值
      //4.依赖项改变，函数自动重新执行，并缓存新的值
    }
  },
  methods: {
    getMsg() {
      console.log("函数调用执行了");
      return this.msg.split("").reverse().join("");
    }
  }
}
</script>

<style>

</style>