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
const { override , addDecoratorsLegacy } = require('customize-cra')
module.exports= override(
    addDecoratorsLegacy()
)