<template>
  <div>
    <h2>1.获取原生DOM元素</h2>
    <h1 id="h" ref="myH">我是h1</h1>
    <h2>2.获取组件对象</h2>
    <Demo ref="demo" />
    <h2>3.vue更新DOM是异步的</h2>
    <p ref="myP">{{ count }}</p>
    <button @click="btn">点击count+1, 马上获取p标签内容</button>
    <h2>4.$nextTick使用场景</h2>
    <Tick />
    <h2>5.组件的name属性</h2>
    <Com />
  </div>
</template>

<script>
import Demo from './Demo'
import Tick from './Tick'
import Com from './Com'
export default {
  name: 'More',
  data() {
    return {
      count: 0,
    }
  },
  mounted() {
    console.log(document.getElementById('h'))
    console.log(this.$refs.myH)
    let demoObj = this.$refs.demo
    demoObj.fn()
  },
  methods: {
    btn() {
      this.count++
      console.log(this.$refs.myP.innerHTML)
      this.$nextTick(() => {
        console.log(this.$refs.myP.innerHTML)
      })
    },
  },
  components: { Demo, Tick, Com },
}
</script>

<style></style>
