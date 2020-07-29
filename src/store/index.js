// 用到创建store的一个方法 createStore 
import { createStore } from 'redux'

// 导入合并后的reducer
import rootReducer from '../reducers'

// createStore 的第一个参数一定是一个reducer, 如果项目里面有多个reducer,请在reducers目录下使用combineReducers合并之后再导出
export default createStore(rootReducer)