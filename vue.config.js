const webpack = require('webpack')
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

const utils = {
  assetsPath: function (_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production' ? './static/common'/* 生产 */ : './static/common'/* 开发 */
    return path.posix.join(assetsSubDirectory, _path)
  },
  resolve: function (dir) {
    return path.join(__dirname, '..', dir)
  }
}
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false, // 生产环境去除map,隐藏源码
  css: {
    // 查看CSS属于哪个css文件
    sourceMap: true,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    config.module.rule([
      {
        // 字体
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        // img
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }
    ])
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
  configureWebpack: config => {
    // 调试JS
    config.devtool = 'source-map'
    performance: {
      hints: false
    }
    if (process.env.NODE_ENV === 'production') {
      // 生产环境
      config.plugins.push(
        // gzip压缩
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        }),
        // 文件分析
        // new BundleAnalyzerPlugin(),
        // 多线程打包
        new HappyPack({
          id: 'happy-babel-js',
          loaders: ['babel-loader?cacheDirectory=true'],
          threadPool: happyThreadPool
        })
      )
    } else {
      // 开发环境
    }
  },
  devServer: {
    port: 9000,
    open: true,
    hot: true,
    proxy: {
      '/api': {
        ws: false,
        target: 'http://10.1.5.207',
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'http://localhost:9000/api'
        }
      }
    },
    overlay: {
      warnings: false,
      errors: true
    }
  }

}
