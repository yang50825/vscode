<template>
  <div>
    <input type="text" v-model="full">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:"无名"
    }
  },
  computed: {
    // 给定死值   基础写法
    // 计算属性名(){
    // return  值
    // }
    // full(){
    //   return "无名氏" //只能取，不能改
    // }

    // 完整写法
    //计算属性名：{
    // set(赋值){},
    // get(取值){
    //   return 值
    // }}

    full: {
      // 赋值触发set 方法 
      set(val) {
        console.log(val);
        this.name = val;
      },
      get() {
        // 每赋一次值，都会取出来 实时同步 

        return this.name

      }
    }

  }
}
</script>

<style>

</style>