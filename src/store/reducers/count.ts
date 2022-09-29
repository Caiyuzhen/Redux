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
const count = (state: ICount, action:{type:ICountActionType, payload:any}) => {
	switch(action.type) {
		case( ICountActionType.INIT ):
			return state
		case( ICountActionType.ADD ):
			return {...state, count: state.count + 1 }
		case( ICountActionType.REDUCE ):
			return {...state, count: state.count -1 }
	}
}

export default count