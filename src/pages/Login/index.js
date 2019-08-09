import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { constatns } from './store'

class Login extends Component {


  render(){
    return(
      <div>
        <input type="text"/>
        <input type="text"/>
        <button>登录</button>
      </div>
    )
  }
}


let mapState = (state) => ({
  loginFlge:state.login.loginFlge
})
let mapDispatch = (dispatch) => ({
  isLogin:(...argu)=>dispatch(constatns.isLogin(...argu))
})

export default connect(mapState,mapDispatch)(Login)