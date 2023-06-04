/*
 * @Author: liuxintao
 * @Date: 2023-05-27 11:48:45
 * @LastEditors: liuxintao
 * @LastEditTime: 2023-06-04 08:34:16
 * @FilePath: /vue_vite/.stylelintrc.cjs
 * @Description:
 */
module.exports = {
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-standard-scss', // 配置stylelint scss插件
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件
    'stylelint-config-prettier', // 配置stylelint和perttier兼容
    'stylelint-config-recommended',
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
    'node_modules/**',
    'dist/**',
    'html/*',
    'public/*',
  ],
  rules: {
    'value-keyword-case': null, // 在css中使用v-bind，不报错
    'no-descending-specificity': null, // 不允许较低特异性的选择器出现在覆盖较高特异性的选择器 (Ⓡ & Ⓢ) 之后
    'function-url-quotes': 'always', // 要求或禁止 url 的引号
    'no-empty-source': null, // 关闭禁止空源码
    // 'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 禁止未知的属性（true：不允许）
    'no-invalid-position-at-import-rule': true, // 大括号之前必须有一个空格
    'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
    'property-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-mask
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，指定的伪类选择器不会触发报错
      },
    ],
  },
}
