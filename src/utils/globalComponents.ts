/*
 * @Author: liuxintao
 * @Date: 2023-06-04 13:25:10
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-07-09 22:26:17
 * @FilePath: /vue_vite/src/utils/globalComponents.ts
 * @Description: 使用自定义插件，注册全局组件
 */

import { App, AsyncComponentLoader, Plugin, defineAsyncComponent } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 获取 ‘@/components’ 目录下的所有路径信息
const components = import.meta.glob('@/components/**/*.vue')

// 初始化各项全局组件的方法
const componentsInit = (app: App) => {
  /**
   * 使用Object.keys()方法，获取到 components 每一项的 key 组成的数组，通过 forEach 方法进行遍历，取得数组的每一项。
   */
  Object.keys(components).forEach((key) => {
    // 获取各个全局组件的 组件名
    const componentName = key.split('/')[3]
    // 获取各全局组件的异步加载方法
    const component: AsyncComponentLoader = components[key]
    // 通过 app.component() 方法，借助 defineAsyncComponent 方法注册全局组件
    app.component(componentName, defineAsyncComponent(component))
  })
}

const globalComponents: Plugin = {
  install(app) {
    componentsInit(app)
    // 注册全部 elementplus icon 组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}

export default globalComponents
