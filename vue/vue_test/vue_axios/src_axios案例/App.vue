<template>
  <div>
    <h1>一、axios学习</h1>
    <UseAxios />
    <hr />
    <h1>获取原生DOM</h1>
    <More />
  </div>
</template>

<script>
import UseAxios from './components/UseAxios'
import More from './components/More.vue'

export default {
  name: 'App',
  components: { UseAxios, More },
}
</script>

<style></style>
