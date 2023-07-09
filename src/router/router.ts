/*
 * @Author: liuxintao
 * @Date: 2023-06-11 18:17:39
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-07-09 22:41:44
 * @FilePath: /vue_vite/src/router/router.ts
 * @Description: 路由地址配置
 */
import { RouteRecordRaw } from 'vue-router'
export const constantRouter: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '',
      icon: '',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: {
          title: '首页',
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登陆',
      icon: 'Promotion',
    },
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      icon: 'DocumentDelete',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/404',
    meta: {
      title: '任意路由',
      icon: 'DataLine',
    },
  },
]
