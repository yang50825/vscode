<template>
  <div>
    <!-- <input type="text" v-focus /> -->
    <input type="text" v-gfocus />
    <p v-color="colorStr" @click="changeColor">修改文字颜色</p>
  </div>
</template>

<script>
export default {
  data() {
    return { colorStr: 'red' }
  },
  methods: {
    changeColor() {
      this.colorStr = 'blue'
    },
  },
  directives: {
    focus: {
      inserted(e) {
        e.focus()
      },
    },

    color: {
      inserted(e, binding) {
        // console.log(binding)
        // console.log(binding.value)
        e.style.color = binding.value
      },
      update(e, binding) {
        e.style.color = binding.value
      },
    },
  },
}
</script>

<style></style>
