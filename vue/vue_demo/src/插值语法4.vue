<template>
  <div>
    <h1>{{str}}</h1>
    <h2>{{person.name}}</h2>
    <h3>{{person.age >= 18 ? "成年" : "未成年"}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str:'hello world',
      person: {
        name: '张三',
        age: 19
      }
    }
  }
}
</script>

<style>

</style>