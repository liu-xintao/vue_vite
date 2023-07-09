<!--
 * @Author: liuxintao
 * @Date: 2023-07-09 18:43:54
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-07-09 19:11:38
 * @FilePath: /vue_vite/src/layout/logo/index.vue
 * @Description: LOGO组件
-->
<template>
  <div class="logo">
    <img :src="setting.src" />
    <span>{{ setting.name }}</span>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting.ts'
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  padding: 0 16px;

  img {
    width: 50px;
    height: 50px;
  }

  span {
    margin-left: 16px;
    color: $sider-logo-color;
    font-size: $sider-logo-fontSize;
  }
}
</style>
