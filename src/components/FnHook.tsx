import React, { FC, ReactElement }  from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { rootState } from '../store'
import { IAdminState } from '../store/reducers/admin'
import { ICountActionType } from '../store/reducers/count'
import { IUser, IUserActionType } from '../store/reducers/user'



interface IProps {
	count? : number
	addCount? (): void
	reduce?(): void
}


const FnHook:FC<IProps> = (props: IProps) : ReactElement => {

	/*从 state 中获取 count、user, 用<范型>规范 user 的类型, 因为之前 admin 规范为 IAdminState 了，user 没有规范为 IAdminState，所以 user 的类型规范会更麻烦些
		rootState 对应 user 类型, {user:IUser} 对应返回值的类型, state: rootState 对应入参的类型	*/
	const count = useSelector((state: rootState) => state.count )
	const { user } = useSelector<rootState, {user:IUser}>((state: rootState) => state.user )
	const { admin } = useSelector<rootState, IAdminState>((state: rootState) => state.admin)
	// console.log(count.count,user.name)//第一个 user 是上面定义的 对象变量！

	// 🔥🔥在函数内部调用 dispatch 的写法, 并定义【🔥对应的修改数据的方法！】
	const dispatch = useDispatch()

	const changeUserName = () => {
		dispatch({
			type: IUserActionType.CHANGE,
			payload: { user: { id:1, name:'🍙饭团' } }
		})
	}

	const addCount = () => {
		dispatch({
			type: ICountActionType.ADD,
			payload: { }
		})
	}

	const reducer = () => {
		dispatch({
			type: ICountActionType.REDUCE,
			payload: { }
		})
	}

	

	return (
		<>
			<h1>FnHook:
				<br />
				{admin.name}
				<br />
				{user.name}
				{count.count}
				<button onClick={ ()=>{addCount()} }> + </button>
				<button onClick={ ()=>{reducer()} }> - </button>
				<button onClick={ ()=>{changeUserName()} }> ChangeName </button>
			</h1>
		</>
	)
}


export default FnHook