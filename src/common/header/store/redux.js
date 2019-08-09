import { constatns } from './index'
const defaultState = {
  focused:false,
  mouseIn:false,
  list:[],
  page:1,
  totalPage:1
}

export default (state=defaultState,action)=>{
  let newState
  switch(action.type){

    case constatns.HANDLEFOCUS :
    newState = {...state}
    newState.focused = action.boole
    return newState

    case constatns.HANDLELIST :
    newState = {...state}
    newState.list = action.arr
    newState.totalPage = action.page
    return newState

    case constatns.TOTALMOUSEIN :
    newState = {...state}
    newState.mouseIn = action.bool
    return newState

    case constatns.NEXTPAGE :
      newState = {...state}
      if(newState.page == newState.totalPage){
        newState.page=1
      }else{
        newState.page++
      }
      return newState

    default:
      return state
  }
}