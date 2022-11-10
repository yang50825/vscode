<template>
  <div>
    <p>1.获取所有的图书信息</p>
    <button @click="getAllFn">点击-查看控制台</button>
    <br />
    <p>2.查询图书信息</p>
    <input type="text" placeholder="请输入要查询的书名" v-model="name" />
    <button @click="findFn">查询</button>
    <p>3.添加图书信息</p>
    <div>
      <input type="text" placeholder="书名" v-model="bookObj.bookname" />
    </div>
    <div><input type="text" placeholder="作者" v-model="bookObj.author" /></div>
    <div>
      <input type="text" placeholder="出版社" v-model="bookObj.publisher" />
    </div>
    <button @click="sendFn">发布</button>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://123.57.109.30:3006'
export default {
  name: 'UseAxios',
  data() {
    return {
      name: '',
      bookObj: {
        bookname: '',
        author: '',
        publisher: '',
      },
    }
  },
  methods: {
    getAllFn() {
      axios({
        url: 'http://localhost:3001/api/consumer/goods/getGoodsList',
        method: 'GET',
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    findFn() {
      axios({
        url: '/api/getbooks',
        method: 'GET',
        params: {
          bookname: this.name,
        },
      }).then((res) => {
        console.log(res)
      })
    },
    sendFn() {
      axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          bookname: this.bookObj.bookname,
          author: this.bookObj.author,
          publisher: this.bookObj.publisher,
          appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
        },
      }).then((res) => {})
    },
  },
}
</script>

<style>
button {
  margin: 5px;
}
</style>
