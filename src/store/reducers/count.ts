//🔥🔥其中一个 reducers, 初始化数据

// 🔌定义数据接口类型
export interface ICount {
	count: number
}


//🛢定义初始数据
const initCount : ICount = {
	count: 0
}


//🎃🎃定义 action 的枚举
export enum ICountActionType {
	INIT,
	ADD,
	REDUCE,
}


//👇定义每种操作对应的反应
const count = (state: ICount = initCount, action:{type:ICountActionType, payload:any}) => {
	switch(action.type) {
		case( ICountActionType.INIT ):
			return state
		case( ICountActionType.ADD ):
			return { count: state.count + 1 } //🔥🔥也可以在 return 中进行数据的计算
		case( ICountActionType.REDUCE ):
			return { count: state.count - 1 } //🔥🔥也可以在 return 中进行数据的计算
		default:
			return state
	}
}

export default count