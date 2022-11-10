<template>
  <div>
    <MyProject
      v-for="(obj, index) in list"
      :key="obj.id"
      :title="obj.proname"
      :price="obj.proprice"
      :msg="obj.info"
      :index="index"
      @subPrice="kanFn"
    />
  </div>
</template>

<script>
import MyProject from './components/MyProject.vue'

export default {
  components: {
    MyProject,
  },
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
  methods: {
    kanFn(index, price) {
      if (this.list[index].proprice > 1) {
        this.list[index].proprice = (this.list[index].proprice - price).toFixed(
          2
        )
      }
    },
  },
}
</script>

<style></style>
