<template>
  <div>
    <input type="text" @keydown.tab="fn" >
  </div>
</template>

<script>
export default {
  methods: {
    fn() {
      console.log('enter fn');
    }
  }
}
</script>

<style>

</style>