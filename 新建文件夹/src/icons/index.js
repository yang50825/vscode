import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon) //注册了一个全局的'svg-icon'的组件

const req = require.context('./svg', false, /\.svg$/)  //在这个目录下去读取所有的文件（.svg后缀的文件）
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
//以上两行代码的含义就是将所有的 svg 目录下的所有的 .svg 后缀的文件全部引入到项目中