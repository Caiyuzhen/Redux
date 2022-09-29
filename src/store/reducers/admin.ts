//🔥🔥其中一个 reducers, 初始化数据

// 🔌定义数据接口类型
export interface IAdmin {
	id: number
	name: string
}

interface IState {
	admin: IAdmin
}


//🛢定义初始数据，相当于初始化了一个 state
const initAdminState : IState = {
	admin: {
		id: 0,
		name: 'Kim'
	}
}


//🎃🎃定义 action 的枚举
export enum IAdminActionType {
	INIT,
	CHANGE
}


//👇对于 reducer 来说，默认有 state 参数，用 IState 来定义它的类型并赋予默认值, action 用来接收 action 类型, 用一个 type 对象来定义！
const admin = (state: IState = initAdminState, action: {type: IAdminActionType, payload:any} ) => {//payload 为传递的参数，不可预测要改什么类型，所以为 any
	switch(action.type) {
		case( IAdminActionType.INIT):
			return state ///初始值不变，所以直接 return
		case( IAdminActionType.CHANGE):
			return {...state, ...action.payload}//拓展出传入的参数，返回的是一份新数据
		default:
			return state //默认值
	}
	
}


export default admin