import React from 'react'
import { connect } from 'react-redux'
import { rootState } from '../store'
import { Dispatch } from 'redux'





const FnExample = () => {
  return (
	<div>FnExample</div>
  )
}



const mapStateToProps = (state: rootState) => {
	return {...state.admin, ...state.user} //⚡️引入需要使用的 state 数据
}


const mapDispatchToProps = () => ({
	changeUserName: () => {
		dispatch({
			type: '',
			payload: {}
		})
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(FnExample)