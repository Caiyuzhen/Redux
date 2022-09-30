// 🌟核心根文件来导出 reducers
import { combineReducers } from 'redux'
import user from './user'
import admin from './admin'
import count from './count'


/*🔥🔥合并所有 Reducer
  ⚡️⚡️注意，每次新增一个 reducer 数据都要来这里合并一下！！*/
export default combineReducers({user, admin, count})