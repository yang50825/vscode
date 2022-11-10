<template>
  <div>
    <button @click="comName = 'UserName'">账号密码填写</button>
    <button @click="comName = 'UserInfo'">个人信息填写</button>
    <p>下面监视注册组件</p>
    <div style="border: 1px solid red">
      <keep-alive>
        <component :is="comName"> </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import UserName from '../components/UserName'
import UserInfo from '../components/UserInfo'
export default {
  name: 'UseDynamic',
  components: {
    UserName,
    UserInfo,
  },
  data() {
    return {
      comName: UserName,
    }
  },
  methods: {},
}
</script>

<style>
button {
  margin: 5px;
}
</style>
