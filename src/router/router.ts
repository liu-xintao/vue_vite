/*
 * @Author: liuxintao
 * @Date: 2023-06-11 18:17:39
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-06-11 18:24:26
 * @FilePath: /vue_vite/src/router/router.ts
 * @Description: 路由地址配置
 */
export const constantRouter = [
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/404',
  },
]
