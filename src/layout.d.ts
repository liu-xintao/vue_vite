/*
 * @Author: liuxintao
 * @Date: 2023-07-09 18:50:05
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-07-09 18:50:20
 * @FilePath: /vue_vite/src/layout.d.ts
 * @Description: ts解析 “.vue” 文件
 */
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
