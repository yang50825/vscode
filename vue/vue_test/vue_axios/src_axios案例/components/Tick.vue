<template>
  <div>
    <input
      v-if="isShow"
      type="text"
      placeholder="这是一个输入框"
      ref="myInput"
    />
    <button v-else @click="fn">点我进行搜索</button>
  </div>
</template>

<script>
export default {
  name: 'Tick',
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    // fn() {
    //   this.isShow = true
    //   this.$nextTick(() => {
    //     this.$refs.myInput.focus()
    //   })
    // },
    async fn() {
      this.isShow = true
      await this.$nextTick()
      this.$refs.myInput.focus()
    },
  },
}
</script>

<style></style>
