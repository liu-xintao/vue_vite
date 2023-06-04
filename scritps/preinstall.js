/*
 * @Author: liuxintao
 * @Date: 2023-05-31 23:40:10
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-05-31 23:44:09
 * @FilePath: /vue_vite/scritps/preinstall.js
 * @Description:
 */
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(`must using pnpm`)
  process.exit(1)
}
