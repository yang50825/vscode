<template>
  <div class="my_bottom">
    <div class="ck"><input type="checkbox" v-model="isAll" /></div>
    <div style="margin-right: 80px">
      <span>全选</span>
    </div>
    <div class="total_box">
      <span>合计：</span>
      <span class="total_price"
        >￥ <span>{{ totalPrice }}</span></span
      >
    </div>
    <div class="bottom_right">
      <span class="bottom_right_total">结算({{ totalCount }})</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['goodsList', 'checkAllGoods'],
  computed: {
    total() {
      return this.goodsList.length
    },
    checkTotal() {
      return this.goodsList.reduce(
        (pre, goods) => pre + (goods.done == 1 ? 1 : 0),
        0
      )
    },
    // 购买的总数量
    totalCount() {
      let count = 0
      this.goodsList.forEach((goods) => {
        if (goods.done) {
          count += goods.count
        }
      })
      return count
    },
    // 购买的总金额
    totalPrice() {
      let totalPrice = 0
      this.goodsList.forEach((goods) => {
        if (goods.done) {
          totalPrice += goods.count * goods.price
        }
      })
      return totalPrice
    },
    isAll: {
      //全选框是否勾选
      get() {
        // console.log(this.total)
        return this.checkTotal === this.total && this.total > 0
      },
      //isAll被修改时set被调用
      set(value) {
        // this.checkAllTodo(value)
        this.$emit('checkAllGoods', value)
      },
    },
  },
}
</script>

<style>
.my_bottom {
  margin-top: 5px;
  width: 100%;
  height: 40px;
  background-color: #fdfefe;
  float: left;
  border: 0.5px solid #d5d3d3;
  line-height: 40px;
  color: #24272a;
}

.my_bottom div {
  float: left;
}

.ck {
  width: 20px;
  padding: 0 10px;
  float: left;
}

/* 合计盒子 */
.total_box {
  float: left;
  width: 200px;
  margin-right: 10px;
}

.total_price {
  color: #ff0000;
  font-weight: 800;
}

.bottom_right {
  height: 30px;
  width: 100px;
  background-color: #197afe;
  border: 1px solid #197afe;
  margin-top: 5px;
  border-radius: 13px;
  color: #fdfefe;
  float: left;
  line-height: 30px;
}

.bottom_right_total {
  padding: 0 10px;
}
</style>
