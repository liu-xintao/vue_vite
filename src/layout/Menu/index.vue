<!--
 * @Author: liuxintao
 * @Date: 2023-07-09 19:20:37
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-07-09 21:59:30
 * @FilePath: /vue_vite/src/layout/Menu/index.vue
 * @Description: 侧边栏导航组件
-->
<template>
  <el-menu background-color="var(--bg-color)" text-color="var(--text-color)">
    <menu-item :routerMeun="usersStore.routerMeun"></menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/users'
import MenuItem from './MenuItem/index.vue'
const usersStore = useUserStore()
</script>

<style scoped lang="scss">
:deep(.el-menu) {
  border-right: none;
}
</style>
