<!--
 * @Author: liuxintao
 * @Date: 2023-06-22 20:58:44
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-07-09 19:37:36
 * @FilePath: /vue_vite/src/layout/index.vue
 * @Description: layout页面
-->
<template>
  <div class="app-container">
    <div class="sider">
      <Logo></Logo>
      <Menu></Menu>
    </div>
    <div class="main-content">
      <header class="top">顶部tabbar</header>
      <main class="main">
        <el-scrollbar view-class="view-class">主体内容区</el-scrollbar>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './Logo/index.vue'
import Menu from './Menu/index.vue'
</script>

<style scoped lang="scss">
.app-container {
  width: 100%;
  height: 100vh;
  display: flex;

  .sider {
    width: $sider-width;
    height: 100%;
    background: var(--bg-color);
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;

    .top {
      height: 50px;
      background: darkcyan;
    }

    .main {
      flex: 1;
      background: yellow;
      overflow: auto;

      :deep(.view-class) {
        padding: 20px;
      }
    }
  }
}
</style>
