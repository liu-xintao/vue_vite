/*
 * @Author: liuxintao
 * @Date: 2023-05-27 09:16:25
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-06-04 20:54:00
 * @FilePath: /vue_vite/src/main.ts
 * @Description: 项目入口文件
 */
import { createApp } from 'vue'
import App from './App.vue'
// 引入elementplus组件库和他的样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg 图片需要的配置代码
import 'virtual:svg-icons-register'
import globalComponents from './utils/globalComponents'
import '@/style/index.scss'

import axios from 'axios'

const app = createApp(App)
// 对elementplus组件库进行全局使用注册
app.use(ElementPlus, {
  locale: zhCn,
})

axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111',
  },
})

// 自定义全局组件
app.use(globalComponents)
app.mount('#app')
