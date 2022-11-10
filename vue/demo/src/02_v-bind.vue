<template>
  <div>
    <a v-bind:href="url">百度一下</a>
    <img :src="imgSrc" style="height: 100px; width: 100px;" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://www.baidu.com",
      imgSrc: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.2008php.com%2F09_Website_appreciate%2F10-07-11%2F1278861720_g.jpg&refer=http%3A%2F%2Fwww.2008php.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665127384&t=4dde7a5bf1593a6b48585279cf29d15d"
    }
  }
}
</script>

<style>

</style>