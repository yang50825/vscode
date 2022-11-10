<template>
  <div>
    <a @click.self="fn" :href="url">百度</a>
    <img :src="imgSrc">
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://www.baidu.com",
      imgSrc: "https://img2.baidu.com/it/u=3744598050,4191464688&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1662656400&t=23603a515928079839feac743f219de8"
    }
  },
  methods:{
    fn() {
      location.href = this.url;    
    }
  }
}
</script>

<style>

</style>