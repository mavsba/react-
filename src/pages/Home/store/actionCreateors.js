import { constatns } from './index.js'
import axios from 'axios'

let url ="https://www.easy-mock.com/mock/5cd68a0256d2704f0aaf17a2"

export const alertTopicImg = (arr)=>({
  type:constatns.ALERTTOPICIMG,
  arr
}) 

export const alertArticleList = (arr)=>({
  type:constatns.ALERTARTICLELIST,
  arr
}) 

export const getTopicImg = (bool) => {
  return (dispatch) => {
    axios.get(`${url}/getTopic`)
    .then(({data})=>{
      if(data.success){
        dispatch(alertTopicImg(data.data.topicList))
        dispatch(alertArticleList(data.data.articleList))
      }else{
        console.log('数据返回不正确')  
      }
    })
    .catch((err)=>{
      console.log('图片请求出错')
    })
  }
}




export const reqArticleList = (bool) => {
  return (dispatch) => {
    axios.get(`${url}/getTopic`)
    .then(({data})=>{
      if(data.success){
        dispatch(alertTopicImg(data.data.topicList))
      }else{
        console.log('数据返回不正确')  
      }
    })
    .catch((err)=>{
      console.log('图片请求出错')
    })
  }
}

export const addLoadingList = (arr,num)=>({
  type:constatns.ADDLOADINGLIST,
  arr,
  num
}) 


export const reqLoadingList = (num) => {
  return (dispatch) => {
    console.log(`${url}/loadList?page=${num}`)
    axios.get(`${url}/loadList?page=${num}`)
    .then(({data})=>{
      if(data.success){
        dispatch(addLoadingList(data.data,num+1))
      }else{
        console.log('数据返回不正确')  
      }
    })
    .catch((err)=>{
      console.log('图片请求出错')
    })
  }
} 


