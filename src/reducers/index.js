// 用来合并项目中的多个reducer
import { combineReducers } from 'redux'

import cart from './cart'

// 导出合并后的reducer
export default combineReducers({
    cart
})