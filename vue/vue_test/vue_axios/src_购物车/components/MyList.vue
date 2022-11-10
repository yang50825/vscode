<template>
  <div class="center_box">
    <MyItem v-for="obj in goodsList" :key="obj.id" :goods="obj" />
  </div>
</template>

<script>
import MyItem from './MyItem'

export default {
  name: 'MyList',
  components: { MyItem },
  props: ['goodsList'],
}
</script>

<style scoped>
.center_box {
  width: 500px;
  background-color: blanchedalmond;
}
</style>
