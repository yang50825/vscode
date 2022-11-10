<template>
  <div>
    <!-- 按钮标题 -->
    <div class="title">
      <!-- <h4>芙蓉楼送辛渐</h4> -->
      <slot name="title">我是标题</slot>
      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? '收起' : '展开' }}
      </span>
    </div>
    <!-- 下拉内容 -->
    <div class="container" v-show="isShow">
      <slot :row="defaultObj">默认内容</slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      defaultObj: {
        defaultOne: '张三',
        defaultTwo: '李四',
      },
    }
  },
}
</script>

<style scoped>
h3 {
  text-align: center;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0 1em;
}

.title h4 {
  line-height: 2;
  margin: 0;
}

.container {
  border: 1px solid #ccc;
  padding: 0 1em;
}

.btn {
  /* 鼠标改成手的形状 */
  cursor: pointer;
}

img {
  width: 50%;
}
</style>
