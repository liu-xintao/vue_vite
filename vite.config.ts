/*
 * @Author: liuxintao
 * @Date: 2023-05-27 09:16:25
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-06-11 17:13:42
 * @FilePath: /vue_vite/vite.config.ts
 * @Description: vite.config 文件
 */
import { UserConfigExport, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入 svg 需要用到的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default ({ command, mode }): UserConfigExport => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
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
    server: {
      // 配置代理规则
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, ''),
        },
      },
    },
  }
}
