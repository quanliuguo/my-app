/* 
    1.安装 react-app-rewired 修改scripts命令 新建config-overrides.js文件
    2.安装 customize-cra  引入 override , addDecoratorsLegacy
    4.安装 @babel/plugin-proposal-decorators
*/

// module.exports = (config) =>{
//     // 更改config
//     return config
// }

/* 使用customize-cra 可以这样写 */
const { override , addDecoratorsLegacy, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')
const theme = require('./theme.js')
const path = require("path");

module.exports= override(
    addDecoratorsLegacy(),
    // 用下面这种方法不用引入样式文件 @import '~antd/dist/antd.less'; 
    // 它会自动加载样式
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true // 值为‘css’时在调用组件时会默认引入css样式，设置为true时会自动引入less文件，通常在使用主题自定义时会设置为true
    }),
    // 得提前安装 less less-loader依赖, less-loader 用指定5.0的版本
    addLessLoader({
        javascriptEnabled: true,
        // 修改变量的配置
        modifyVars: theme
    }),
    addWebpackAlias({
        "@": path.resolve(__dirname, "./src"),
    })
)