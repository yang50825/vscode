<template>
  <div>
    <MyProject
      v-for="(obj, index) in list"
      :key="obj.id"
      :index="index"
      :title="obj.proname"
      :price="obj.proprice"
      :msg="obj.info"
      @subPrice="subFn"
    />
  </div>
</template>

<script>
import MyProject from './components/MyProject.vue'
export default {
  name: 'App',
  data() {
    return {
      list: [
        {
          id: 1,
          proname: '超级好吃的棒棒糖',
          proprice: 18.8,
          info: '开业大酬宾, 全场8折',
        },
        {
          id: 2,
          proname: '超级好吃的大鸡腿',
          proprice: 34.2,
          info: '好吃不腻, 快来买啊',
        },
        {
          id: 3,
          proname: '超级无敌的冰激凌',
          proprice: 14.2,
          info: '炎热的夏天, 来个冰激凌了',
        },
      ],
    }
  },
  components: { MyProject },
  methods: {
    subFn(index, price) {
      if (this.list[index].proprice > 1) {
        console.log(this.list[index].proprice)
        this.list[index].proprice = (this.list[index].proprice - price).toFixed(
          2
        )
      }
    },
  },
}
</script>

<style></style>
