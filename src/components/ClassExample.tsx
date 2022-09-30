import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { rootState } from '../store' //记得导入！
import { IAdmin, IAdminActionType } from '../store/reducers/admin'
import { IUser, IUserActionType } from '../store/reducers/user'


//定义数据的接口
interface IProps {
	admin? : IAdmin
	user? : IUser
	changeAdminName? (): void
	changeUserName? (): void
}


//类组件
class ClassExample extends Component<IProps> {

	changeAdminName = () => {
		this.props.changeAdminName && this.props.changeAdminName() //判断有才执行!！⚡️ && 表示前面为真才执行后面
	}
	changeUserName = () => {
		this.props.changeUserName && this.props.changeUserName() //判断有才调用!! ⚡️ && 表示前面为真才执行后面
	}
	

	render() {
		console.log(this.props)
		return (
			<div>
				Admin:{this.props.admin?.name}
				<button onClick={this.changeAdminName} >change Admin Name</button>
				<br />
				<br />
				Member:{this.props.user?.name}
				<button onClick={this.changeUserName} >change Aser Name</button>
			</div>
		)
	}
}






//🔥🔥🔥把【 store 中的 reducers 的 state 】映射到 【当前组件的 Props 】中去！！
const mapStateToProps = (state: rootState) => {//花括号!
	// return state
	return {...state.admin, ...state.user} //⚡️引入需要使用的 state 数据
}



/*🔥🔥🔥手动修改 reducer 内的数据！⚡️dispatch 的数据类型为 Dispatch (⚡️记得是 redux 的 Dispatch 类型)
		这里定义的两个方法同时也是放进 class 组件内的方法!! 因为组件已经映射了 store！*/
const mapDispatchToProps = (dispatch: Dispatch) => ({//括号!
	//👇👇本质上这里定义的方法就相当于给 ClassExample 这个类增加了两个方法，并且也同步给了 reducer 内!!
	changeAdminName: () => {
		dispatch({		//🔥核心是回应 action
			type: IAdminActionType.CHANGE,	//🔥调用定义 action 的类型
			payload: { admin: {id:0, name:'Admin 的新名字' + new Date().toLocaleString()} } //🔥传递一些参数！记得数据结构要对应上！
		})
	},

	changeUserName: () => {
		dispatch({ //状态更新提交的接口 -> dispatch
			type: IUserActionType.CHANGE,
			payload:{ 
				user: {
						id:0, 
						name:'User 的新名字' + new Date().toLocaleString()} 
					} //🔥加上时间戳，让修改可追溯
		})
	}
})





// 🔥导出时记得用 connect 来包裹一下（ClassExample）这个组件!! ⚡️然后 增加两个方法：mapStateToProps 、 mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(ClassExample)
