/*
 * @Author: liuxintao
 * @Date: 2023-05-27 09:16:25
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-06-04 20:52:50
 * @FilePath: /vue_vite/vite.config.ts
 * @Description: vite.config 文件
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入 svg 需要用到的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        // default\
        localEnabled: command === 'serve',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名，用 @ 代替 src
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `@import "./src/style/variable.scss";`,
        },
      },
    },
  }
})
