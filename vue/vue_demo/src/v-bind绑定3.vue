<template>
  <div>
    <a :href="url">百度一下</a>
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://www.baidu.com",
      imgSrc: "https://img1.baidu.com/it/u=724179003,4096104503&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1662656400&t=25238730e36bf733bcf3e0a51576472a"
    }
  }
}
</script>

<style>

</style>