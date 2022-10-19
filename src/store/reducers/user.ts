//🔥🔥其中一个 reducers, 初始化数据

// 🔌定义数据接口类型
export interface IUser {
	id: number
	name: string
}

interface IState {
	user: IUser//继承接口,并且再扩展出更多信息
}

// 🛢实例化一个 User 的初始数据，相当于初始化了一个 state
const initUserState : IState = {
	user: {
		id: 0,//默认值
		name: 'Zen',//默认值
	}
}


//🎃🎃定义 action 的枚举
export enum IUserActionType {
	INIT,
	CHANGE,
}


// 👇对于 reducer 来说，默认有 state 参数，用 IState 来定义它的类型并赋予默认值
const user = (state: IState = initUserState, action: {type: IUserActionType, payload:any}) => {
	switch(action.type) {
		case( IUserActionType.INIT ): 
			return state //初始值
		case( IUserActionType.CHANGE ):
			return {...state, ...action.payload} //拓展出传入的参数，返回的是一份新数据
		default:
			return state //默认值
	}
}

export default user