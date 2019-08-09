import { constatns } from './index'
const defaultState = {
  TopicImg:[],
  articleList:[],
  page:1,
  num:0,
}

export default (state=defaultState,action)=>{
  let newState
  switch(action.type){

    case constatns.ALERTTOPICIMG :
    newState = {...state}
    newState.TopicImg = action.arr
    return newState

    case constatns.ALERTARTICLELIST :
    newState = {...state}
    newState.articleList = action.arr
    return newState

    case constatns.ADDLOADINGLIST :
    newState = {...state}
    newState.articleList=newState.articleList.concat(action.arr)
    newState.page = action.num
    return newState

    case 'numjiajia' :
    newState = {...state}
    newState.num = newState.num+1
    return newState

    default:
      return state
  }
}