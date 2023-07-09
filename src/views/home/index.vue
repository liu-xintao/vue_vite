<!--
 * @Author: liuxintao
 * @Date: 2023-06-11 17:33:16
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-06-11 17:33:39
 * @FilePath: /vue_vite/src/views/home/index.vue
 * @Description: home页
-->
<template>
  <div>
    <h1>home页</h1>

    <h2>{{ count }}</h2>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/users'

const useStore = useUserStore()

const { count } = useStore
</script>

<style scoped></style>
