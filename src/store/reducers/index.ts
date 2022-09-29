// 🌟核心根文件来导出 reducers
import { combineReducers } from 'redux'
import user from './user'
import admin from './admin'


//🔥🔥合并所有 Reducer
export default combineReducers({user, admin})