//⚡️添加中间件、调试工具、以及进行基础的配置以及基础的 store 数据的合并导出
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension" //引入 chrome 调试工具
import reducers from "./reducers" //从 reducers 文件导入，默认导入的是 index 文件


// 创建 reducers 的 store 数据
const store = createStore(reducers, composeWithDevTools(applyMiddleware())) //引入 chrome 调试工具以及中间件


//👇导出根 state 的【 rootState 类型】(ReturnType 表示这个对象是什么类型，就返回什么类型), 用来规范【要映射到组件内的数据】的类型
//⚠️注意，这个类型会在 【业务组件】 调用 {useSelector} 内进行使用, 比如 const admin = useSelector((state: rootState)=>admin )
export type rootState = ReturnType<typeof reducers>

export default store