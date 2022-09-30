import React, { FC, ReactElement }  from 'react'
import { connect } from 'react-redux'
import { rootState } from '../store'
import { Dispatch } from 'redux'
import { ICount } from '../store/reducers/count'
import { ICountActionType } from '../store/reducers/count'


//定义数据的接口
interface IProps {
	count? : number
	addCount? (): void
	reducer? (): void
}



//函数组件
const FnExample:FC<IProps> = ({count, addCount, reducer}) : ReactElement => {
// const FnExample:FC<IProps> = (props: IProps) : ReactElement => {

	// const {count, addCount, reducer} = props//解构赋值
	// console.log(count)

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={addCount}> + </button>
			<button onClick={reducer}> - </button>
		</div>
	)
}


//🔥🔥🔥把【 store 中的 reducers 的 state 】映射到 【当前组件的 Props 】中去！！
const mapStateToProps = (state: rootState) => {
	return {...state.count} //⚡️引入需要使用的 state 数据
}


/*🔥🔥🔥手动修改 reducer 内的数据！*/
// 👇本质上这里定义的方法就是在【函数组件】中的方法！
const mapDispatchToProps = (dispatch: Dispatch) => ({
	addCount: () => {
		dispatch({//状态更新提交接口 dispatch
			type: ICountActionType.ADD,
			payload: { }
		})
	},

	reducer: () => {
		dispatch({//状态更新提交的接口 -> dispatch
			type: ICountActionType.REDUCE,
			payload: { }
		})
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(FnExample)