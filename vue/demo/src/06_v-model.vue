<template>
  <div>
    <input type="text" v-model="name"><br>
    <input type="text" v-model="pwd">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'zs',
      pwd: '123'
    }
  }
}
</script>

<style>

</style>