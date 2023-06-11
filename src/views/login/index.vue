<!--
 * @Author: liuxintao
 * @Date: 2023-06-11 17:32:26
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-06-11 19:43:45
 * @FilePath: /vue_vite/src/views/login/index.vue
 * @Description: 登陆页
-->
<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xm="0"></el-col>
      <el-col :span="12" :xm="24">
        <el-form class="login_form" :data="form" ref="formRef">
          <h1>Hello!</h1>
          <h2>欢迎来到这里</h2>
          <el-form-item props="userName">
            <el-input :prefix-icon="User" :model="form.userName"></el-input>
          </el-form-item>
          <el-form-item props="passWord">
            <el-input
              type="passwod"
              :prefix-icon="Lock"
              v-model="form.passWord"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login_btn">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'

const formRef = ref()
const form = reactive({
  userName: 'admin',
  passWord: '111111',
})
</script>

<style scoped lang="scss">
.login_container {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    top: 30vh;
    width: 80%;
    padding: 30px;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;

    h1 {
      font-size: 40px;
      color: #ffffff;
    }

    h2 {
      font-size: 20px;
      color: #ffffff;
      margin: 15px 0;
    }

    .login_btn {
      flex: 1;
    }
  }
}
</style>
