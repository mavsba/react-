import { constatns } from './index'
import * as actionTypes from './actionTypes'
const defaultState = {
  loginFlge : true ,
}


export default (state=defaultState,action)=>{
  let newState
  switch(action.type){

    case actionTypes.ISLOGIN :
    newState = {...state}
    newState.loginFlge = action.bool
    return newState

    default:
      return state
  }
}