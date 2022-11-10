import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Find from './views/Find.vue'
import My from './views/My.vue'
import Part from './views/Part.vue'
import NotFound from './views/NotFound.vue'
import Ranking from './views/Second/Ranking.vue'
import Recommend from './views/Second/Recommend.vue'
import SongList from './views/Second/SongList.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

// 定义路由规则
const routes = [
  { path: '/', redirect: '/find' },
  {
    path: '/find',
    component: Find,
    children: [
      { path: 'ranking', component: Ranking },
      { path: 'recommend', component: Recommend },
      { path: 'songList', component: SongList },
    ],
  },
  { path: '/my', component: My },
  { path: '/part', component: Part },
  { path: '*', component: NotFound },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

const isLogin = false
router.beforeEach((to, from, next) => {
  if (to.path === '/my' && isLogin === false) {
    alert('请登录！')
    next(false)
  } else {
    next()
  }
})

new Vue({
  router,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
