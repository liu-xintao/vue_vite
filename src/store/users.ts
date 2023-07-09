/*
 * @Author: liuxintao
 * @Date: 2023-06-22 17:39:34
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-07-09 19:38:56
 * @FilePath: /vue_vite/src/store/users.ts
 * @Description: user 信息仓库
 */
import { constantRouter } from '@/router/router'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    count: 0,
    name: '哈哈哈',
    routerMeun: constantRouter,
  }),
  getters: {},
  actions: {},
})
