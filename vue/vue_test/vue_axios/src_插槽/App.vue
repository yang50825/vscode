<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <!-- <Pannel>
        <template v-slot:title>
          <h4>芙蓉楼送辛渐</h4>
        </template>
        <template v-slot:content>
          <img
            src="https://img2.baidu.com/it/u=4244947304,878295677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334"
            style="width: 100px; height: 100px"
          />
        </template>
      </Pannel>
      <Pannel>
        <template #title>
          <h4>芙蓉楼送辛渐</h4>
        </template>
        <template #content>
          <p>寒雨连江夜入吴,</p>
          <p>平明送客楚山孤。</p>
          <p>洛阳亲友如相问，</p>
          <p>一片冰心在玉壶。</p>
        </template>
      </Pannel> -->
      <Pannel>
        <template v-slot="scope">
          {{ scope.row.defaultOne }}
        </template>
      </Pannel>
    </div>
    <H4>作用域插槽使用场景</H4>
    <UseTable></UseTable>
    <h4>自定义指令</h4>
    <UseDirective></UseDirective>
  </div>
</template>

<script>
import Pannel from './components/Pannel'
import UseTable from './views/UseTable'
import UseDirective from './views/UseDirective'

export default {
  components: {
    Pannel,
    UseTable,
    UseDirective,
  },
}
</script>

<style>
#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid blueviolet;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}
</style>
