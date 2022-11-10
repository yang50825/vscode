<template>
  <div>
    <div @click.capture="fn" style="width: 200px; height: 200px;background-color: red;">
      <!-- stop阻止冒泡 -->
      <div @click="fn1" style="width: 100px;height: 100px;background-color: blue;"></div>
    </div>
    <!-- prevent阻止事件发生 事件可以连用 -->
    <a @click.prevent :href="url">百度一下</a><br><br>
    <a @click.once="fn" href="#">触发父级事件</a>
  </div>

</template>

<script>
export default {
  data() {
    return {
      url: "https://www.baidu.com"
    }
  },
  methods: {
    fn() {
      console.log('父级事件触发');
    },
    fn1() {
      console.log('子级事件触发');
    }
  }
}
</script>

<style>

</style>