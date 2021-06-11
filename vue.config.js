
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部，
  // 比如 https://www.my-app.com/
  // 如果你的应用时部署在一个子路径下，那么你需要在这里
  // 指定子路径。比如，如果你的应用部署在
  // https://www.foobar.com/my-app/
  // 那么将这个值改为 `/my-app/`
  baseUrl: process.env.NODE_ENV === 'production' ? '' : '',

  // 将构建好的文件输出到哪里
  outputDir: 'dist',
  pages: {
    index: {
      // page 的入口
      entry: 'examples/src/main.js',
      // 模板来源
      template: 'examples/public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    // 使用自定义 loader
    config.module
      .rule("md-loader")
      .test(/\.md$/)
      .use("md-loader")
      .loader(resolve("./md-loader/index.js"))
      .end();
  },
  css: {
    loaderOptions: {
      css: {
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      postcss: {
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    }
  },
  // 放置静态资源的地方 (js/css/img/font/...)
  assetsDir: 'static',
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  //  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
  //  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
  //  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
  productionSourceMap: false,
  // 它支持webPack-dev-server的所有选项
  devServer: {
    // host: 'localhost',
    // port: 8888, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    // proxy: 'http://192.168.1.178:30220', // 配置跨域处理,只有一个代理
    // 配置多个代理
    // proxy: {}
    overlay: {
      warnings: false, // 警告
      errors: true// 错误
    }
  }
}
