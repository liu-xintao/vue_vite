<!--
 * @Author: liuxintao
 * @Date: 2023-05-27 09:16:25
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-06-04 09:35:27
 * @FilePath: /vue_vite/src/App.vue
 * @Description: 
-->
<template>
  <div>
    <h1>App</h1>
  </div>
</template>

<script setup lang="ts">
for (let i = 0; i < 5; i++) {


  console.log(i);
}
const fn = () => {


  console.log('heihei');
}

fn();
</script>

<style scoped lang="scss"></style>
