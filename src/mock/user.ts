/*
 * @Author: liuxintao
 * @Date: 2023-06-04 16:27:55
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-06-04 20:54:29
 * @FilePath: /vue_vite/src/mock/user.ts
 * @Description: mock 数据接口
 */
//createUserList:次函数执行会返回一个数组,数组里面包含两个用户信息
import { MockMethod } from 'vite-plugin-mock'

function createUserList() {
  return [
    {
      userId: 1,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'admin',
      password: '111111',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'Admin Token',
    },
    {
      userId: 2,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'system',
      password: '111111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: 'System Token',
    },
  ]
}

// 对外暴露两个接口
// 登陆假接口
// 用户信息假接口
export default [
  // 用户登陆接口
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      // 获取请求体里的用户信息
      const { username, password } = body
      console.log(username, password)

      // 调用获取用户信息函数，判断是否有此用户
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password,
      )
      console.log(checkUser)

      // 没有该用户返回失败信息
      if (!checkUser) {
        return {
          code: 201,
          data: {
            message: '账号或者密码不正确',
          },
        }
      }

      // 有该用户
      const { token } = checkUser

      return { code: 200, data: { token } }
    },
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: (req) => {
      const token = req.headers.token

      const checkUser = createUserList().find((item) => item.token === token)

      if (!checkUser) {
        return { code: 201, data: { message: '获取用户信息失败' } }
      }

      return { code: 200, data: { checkUser } }
    },
  },
] as MockMethod[]
