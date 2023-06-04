/*
 * @Author: liuxintao
 * @Date: 2023-05-27 09:16:25
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-05-31 23:52:52
 * @FilePath: /vue_vite/src/main.ts
 * @Description:
 */
import { createApp } from 'vue'
// 引入elementplus组件库和他的样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
// 对elementplus组件库进行全局使用注册
app.use(ElementPlus)
app.mount('#app')
