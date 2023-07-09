/*
 * @Author: liuxintao
 * @Date: 2023-05-31 23:40:10
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-06-04 10:14:41
 * @FilePath: /vue_vite/scritps/preinstall.js
 * @Description: 强制使用 pnpm 包管理器工具
 */
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`
  )
  process.exit(1)
}
