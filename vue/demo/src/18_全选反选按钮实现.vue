<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll" />
    <button @click="reck">反选</button>
    <ul>
      <li v-for="(obj, index) in arr" :key="index">
        <input type="checkbox" v-model="obj.c" />
        <span>{{ obj.name }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          name: '猪八戒',
          c: false,
        },
        {
          name: '孙悟空',
          c: false,
        },
        {
          name: '唐僧',
          c: false,
        },
        {
          name: '白龙马',
          c: false,
        },
      ],
    }
  },
  computed: {
    // isAll(){
    //   // 第一种写法
    //   //用isAll 去影响全选按钮
    //   // every 查询数组里边不符合条件的数据 返回值为布尔类型
    //   // 统计小选框 ， 影响全选框
    //   // every    查询数组里 不符合条件的，直到返回false 或者true
    //   console.log(this.arr.every(obj=>obj.c===true))
    //   return  this.arr.every(obj=>obj.c===true)
    // }
    //  全选框影响小选框
    isAll: {
      set(val) {
        console.log(val)
        this.arr.forEach((obj) => (obj.c = val))
      },
      get() {
        return this.arr.every((obj) => obj.c === true)
      },
    },
  },
  methods: {
    reck() {
      this.arr.forEach((obj) => (obj.c = !obj.c))
    },
  },
}
</script>
