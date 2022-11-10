<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/part?name=zhangsan">朋友</router-link>
      <!-- <span @click="$router.push({ path: '/find' })">发现音乐</span>
      <span @click="$router.push({ path: '/my' })">我的音乐</span>
      <span @click="$router.push({ path: '/part' })">朋友</span> -->
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}

.footer_wrap .router-link-exact-active {
  color: #fff;
  background: #000;
}
</style>
