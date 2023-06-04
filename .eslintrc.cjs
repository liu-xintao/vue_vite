/*
 * @Author: liuxintao
 * @Date: 2023-05-27 09:30:12
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-06-04 07:47:33
 * @FilePath: /vue_vite/.eslintrc.cjs
 * @Description:
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    // 函数不能重名
    'eslint:recommended',
    // 使用vue3语法规则
    'plugin:vue/vue3-essential',
    // 使用ts语法规则
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  //   为特定类型文件指定解析器
  overrides: [],
  // 指定解析器
  parser: 'vue-eslint-parser',
  //   制定解析器选项
  parserOptions: {
    ecmaVersion: 'latest', // 校验ECMA最新版本
    sourceType: 'module', // 设置为‘script’（默认），或者‘module’代码在ECMAScript模块中
    parser: '@typescript-eslint/parser',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint'],
  //   eslint规则
  rules: {
    // eslint
    'no-var': 'error', // 禁止使用var
    'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', // 禁止出现意外的换行符
    'no-useless-escape': 'error', // 禁止不必要的转义字符

    // typescript
    '@typescript-eslint/no-unused-vars': 'error', // 禁止定义为使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用@ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用any类型
    '@typescript-eslint/no-non-null-assertion': 'off', // 防止使用非空断言操作符（！）来强行将值断言为非空的类型。
    '@typescript-eslint/no-namespace': 'off', // 防止使用命名空间
    '@typescript-eslint/semi': 'off', // 强制在每个语句的末尾添加分号

    // eslint-plugin-vue
    'vue/multi-word-component-names': 'off', // vue组件命名统一为“-”连接的单词
    'vue/script-setup-uses-vars': 'error', // Prevent <script setup> variables used in <template> to be marked as unused
    'vue/no-mutating-props': 'off', // 防止在组件中修改传递的 props 值
    'vue/attribute-hyphenation': 'off', // 在模板中的自定义组件上强制执行属性命名样式
  },
}
