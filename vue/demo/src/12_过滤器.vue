<template>
  <div>
    <!--  -->
    <!-- http://momentjs.cn/docs/#/displaying/ -->
    <p>
      <!-- 用的是全局过滤器 -->
      <!-- 过滤器用于进行文本内容格式化处理。 -->
      {{msg| reverse(',') }}
    </p>
    <p>
      {{msg | toUp| reverse(',')}}
    </p>
    <!-- 鼠标悬停 -->
    <p :title="msg |toUp | reverse(',')">鼠标悬停</p>
  </div>

</template>

<script>
export default {
  data() {
    return {
      msg: "hello, vue"
    }
  },
  filters: {
    toUp(val) {
      return val.toUpperCase();
    }
  }
}
</script>

<style>

</style>