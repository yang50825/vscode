<template>
  <div>
    <h1>{{ obj.name }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        name: "张三",
        age: "12",
      },
    };
  },
};
</script>

<style>

</style>