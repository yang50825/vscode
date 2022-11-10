<template>
  <div>
    <div class="container">
      <MyHeader />
      <MyList :goodsList="goodsList" />
      <MyFooter :goodsList="goodsList" @checkAllGoods="checkAllGoods" />
    </div>
  </div>
</template>

<script>
// 引入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001'

import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'

export default {
  name: 'App',
  data() {
    return {
      goodsList: [],
      isShow: false,
    }
  },
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  methods: {
    addCount(id) {
      this.goodsList.forEach((goods) => {
        if (goods.id == id) {
          goods.count++
        }
      })
    },
    subCount(id) {
      this.goodsList.forEach((goods) => {
        if (goods.id == id && goods.count >= 1) {
          goods.count--
        }
      })
    },

    // 勾选or取消勾协
    checkGoods(id) {
      this.goodsList.forEach((goods) => {
        if (goods.id == id) {
          goods.done = !goods.done
        }
      })
    },

    //全选or取消全选
    checkAllGoods(done) {
      //   console.log(done)
      this.goodsList.forEach((goods) => {
        goods.done = done
      })
    },
  },
  created() {
    axios({
      url: '/api/vue_goods/goods/getGoodsList',
      methods: 'GET',
    }).then((res) => {
      console.log(res)
      this.goodsList = res.data
    })
  },
  mounted() {
    this.$bus.$on('addCount', this.addCount)
    this.$bus.$on('subCount', this.subCount)
    // 勾选事件
    this.$bus.$on('checkGoods', this.checkGoods)
  },
  beforeDestroy() {
    this.$bus.$off('addCount')
    this.$bus.$off('subCount')
    this.$bus.$off('checkGoods')
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

/* 总盒子 */
.container {
  margin: 0 auto;
  width: 500px;
  background-color: #ddd;
}
</style>
