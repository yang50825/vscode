<template>
  <div>
    <p :class="{box:bool}">动态css</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bool: true
    }
  }
}
</script>

<style>
 .box{
  color: blue;
 }
</style>