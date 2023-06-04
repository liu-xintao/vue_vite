<!--
 * @Author: liuxintao
 * @Date: 2023-06-04 12:47:12
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-06-04 14:56:04
 * @FilePath: /vue_vite/src/components/SvgIcon/index.vue
 * @Description: svg 图标组件
-->
<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  // svg 图标颜色
  color: {
    type: String,
    default: '#icon-',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: {
    type: String,
    default: '',
  },
})
</script>

<style scoped></style>
