<!--
 * @Author: liuxintao
 * @Date: 2023-07-09 19:41:02
 * @LastEditors: liuxintao 1666135248@qq.com
 * @LastEditTime: 2023-07-19 21:54:17
 * @FilePath: /vue_vite/src/layout/Menu/MenuItem/index.vue
 * @Description: 菜单每一项
-->
<template>
  <template v-for="menu in routerMeun" :key="menu.name">
    <!-- 没有 children -->
    <el-menu-item
      :index="menu.path"
      v-if="!menu.children?.length && !menu.meta.hideen"
    >
      <template #title>
        <el-icon>
          <component :is="menu.meta!.icon"></component>
        </el-icon>
        <span>{{ menu.meta!.title }}</span>
      </template>
    </el-menu-item>
    <!-- children 只有一项 -->
    <el-menu-item
      :index="menu.path"
      v-if="menu.children && menu.children.length === 1 && !menu.meta.hideen"
    >
      <template #title>
        <el-icon>
          <component :is="menu.children[0].meta!.icon"></component>
        </el-icon>
        <span>{{ menu.children[0].meta!.title }}</span>
      </template>
    </el-menu-item>
    <!-- children 大于一个 -->
    <el-sub-menu
      :index="menu.path"
      v-if="menu.children && menu.children.length > 1 && !menu.meta.hideen"
    >
      <template #title>
        <el-icon>
          <component :is="menu.meta!.icon"></component>
        </el-icon>
        <span>{{ menu.meta!.title }}</span>
      </template>
      <!-- 使用递归组件 -->
      <menu-item :routerMeun="menu.children"></menu-item>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
defineOptions({ name: 'MenuItem' })

defineProps(['routerMeun'])
</script>

<style scoped lang="scss"></style>
