<template>
  <div class="context_box">
    <div class="ck">
      <input
        type="checkbox"
        :checked="goods.done"
        @change="handleCheck(goods.id)"
      />
    </div>
    <div class="img">
      <img :src="goods.picture" width="150px" height="150px" />
    </div>
    <div class="right">
      <p class="title">
        <span class="right_title">
          {{ goods.title }}
        </span>
      </p>
      <p>
        <span class="right_title">
          <font color="red">￥{{ goods.price }}</font>
        </span>

        <button class="btn" @click="sub(goods.id)">-</button>
        {{ goods.count }}
        <button class="btn" @click="add(goods.id)">+</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['goods'],
  methods: {
    // 根据id数量+1
    add(id) {
      this.$bus.$emit('addCount', id)
    },
    // 根据id数量-1
    sub(id) {
      this.$bus.$emit('subCount', id)
    },
    // 勾选事件
    handleCheck(id) {
      //   console.log(id)
      // 通知App组件将对应的todo对象的done值取反
      this.$bus.$emit('checkGoods', id)
    },
  },
}
</script>

<style scoped>
.context_box {
  width: 500px;
  height: 155px;
  background-color: #fdfefe;
  padding: 10px 0;
  border: 1px solid #d5d3d3;
}
.ck {
  width: 20px;
  height: 150px;
  float: left;
  line-height: 150px;
  padding: 0 10px;
}
.img {
  float: left;
  width: 150px;
  height: 150px;
  /* background-color: blue; */
  border-radius: 20px;
}
.right {
  float: left;
  width: 300px;
  height: 150px;
  margin-left: 10px;
  /* background-color: yellow; */
}
.btn {
  width: 30px;
  height: 30px;
}
.right_title {
  color: #24272a;
  font-weight: 800;
  margin-right: 130px;
}
.title {
  margin-bottom: 50px;
}
</style>
