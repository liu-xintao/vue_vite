/*
 * @Author: liuxintao
 * @Date: 2023-06-11 17:30:49
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-06-11 18:20:40
 * @FilePath: /vue_vite/src/router/index.ts
 * @Description: 路由
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRouter } from './router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouter,
  scrollBehavior: () => {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
