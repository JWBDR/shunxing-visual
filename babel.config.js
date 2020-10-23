// 旧
// const prodPlugins = []

// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset',
//   ],
//   ...prodPlugins
// }

// 新
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')// 打包不显示console
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // 发布产品时的插件数组
    ...prodPlugins // 巧妙利用展开运算符
  ]
}
