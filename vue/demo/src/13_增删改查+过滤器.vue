<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>


      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="obj in list" :key="obj.id">
            <td>{{obj.id}}</td>
            <td>{{obj.name}}</td>


            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{red: obj.price>=100}">{{obj.price}}</td>
            <!-- | formDate  是一个过滤通道 对时间日期进行过滤-->
            <td>{{obj.time | formDate}}</td>

            <!-- 删除数据 是根据id进行删除 -->
            <td><a href="#" @click="delFn(obj.id)">删除</a></td>
            
          </tr>
        </tbody>
          <!-- 
        <tfoot >
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
            -->
      </table>


      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model="name" 
             
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model.number="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addBtn">添加资产</button>
      </form>
    </div>
  </div>
</template>


<script>

import mom from "moment"
//第一步  铺设数据
// 第二步 
//  1.给添加数据 按钮绑定数据
//  2.双向绑定数据 name ,price


export default {
  data() {
    return {
      name: "", // 名称
      price: 0, // 价格
      list: [
        { id: 100, name: "外套", price: 199, time: new Date('2010-08-12')},
        { id: 101, name: "裤子", price: 34, time: new Date('2013-09-01') },
        { id: 102, name: "鞋", price: 25.4, time: new Date('2018-11-22') },
        { id: 103, name: "头发", price: 19900, time: new Date('2020-12-12') }
      ],
    };
  },

  // 过滤器   对事件日期进行过滤
  filters:{
     formDate(val){
      return mom(val).format("YYYY-MM-DD")
     }
  },
  methods:{
    addBtn(){
      //判断添加的值是否为空
      if(this.name.trim().length ===0 || this.price===0 ){
        alert("内容不能为空")
        return
      }
      console.log("绑定时间成功");
      // 把值添加到list 数据中
      this.list.push({
        id:this.list[this.list.length -1].id+1,
        name:this.name,//此处this.name 是上边变量的name 不是list里边的name
        price:this.price,
        time:  new Date()
      });
    },
    delFn(id) {
      // console.log(id);
      // let xia = this.list.findIndex(obj => obj.id);//findIndex 获取当前点击数据的 索引下表
      // console.log("获取当前数据的索引下表"+xia);
      let index= this.list.findIndex(obj =>obj.id===id)  //查找当前数据的 下表索引
      this.list.splice(index,1)//index 是下表  1 代表删除1条数据  如果是2的话 是从当前下表开始 往后删除两条数据（包括当前下表所在数据在内的两条）
      console.log(index);
    }
  }
};
</script>


<style >
.red{
  color: red;
}
</style>