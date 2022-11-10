<template>
  <div>
    <p>
      {{num}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 10,
      b: 20
    }
  },
  computed: {
    num() {
      return this.a + this.b;
    }
  }
}
</script>

<style>

</style>