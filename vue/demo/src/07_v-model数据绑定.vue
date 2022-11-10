<template>
  <div>
    <select v-model="areas">
      <option value="北京">北京</option>
      <option value="上海">上海</option>
      <option value="西安">西安</option>
    </select>

    <input type="checkbox" v-model="hobby" value="抽烟"/> 抽烟 
    <input type="checkbox" v-model="hobby" value="喝酒"/> 喝酒 
    <input type="checkbox" v-model="hobby" value="烫头"/> 烫头 
    <div>
      <span>自我介绍</span>
      <textarea v-model="info"></textarea>
    </div>
    <div>
      <span>性别</span>
      <input type="radio" name="sex" v-model='sex' value="male"/>male
      <input type="radio" name="sex" v-model='sex' value="famale"/>famale
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areas: '北京',
      hobby: [],
      info: '',
      sex: 'male'
    }
  }
}
</script>

<style>

</style>