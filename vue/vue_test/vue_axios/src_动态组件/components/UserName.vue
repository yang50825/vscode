<template>
  <div>
    <div>
      <span>用户名：</span>
      <input type="text" />
    </div>
    <div>
      <span>密码：</span>
      <input type="password" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserName',
  created: function () {
    console.log('UserName创建了')
  },
  destroy: function () {
    console.log('UserName销毁了')
  },
  activated() {
    console.log('UserName激活了')
  },
  deactivated: function () {
    console.log('UserName失去激活')
  },
}
</script>

<style></style>
