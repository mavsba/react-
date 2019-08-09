import { constatns } from './index.js'
import axios from 'axios'

let url ="https://www.easy-mock.com/mock/5cd68a0256d2704f0aaf17a2"

// 像这种 action 对象内部自己用的  就不用暴露了，并且都写在最顶端 进行分类！
const handleList = (arr) => ({
  type:constatns.HANDLELIST,
  arr,
  page:Math.ceil(arr.length/10)
})



export const totalMouseIn = (bool) => ({
  type:constatns.TOTALMOUSEIN,
  bool
})


export const handleFocus = (boole) => ({
  type:constatns.HANDLEFOCUS,
  boole
})



export const getList = () => {
  return (dispatch) => { 
    axios.get(`${url}/list`)
    .then(({data})=>{
      if(data.success){
        dispatch(handleList(data.data))
      }else{
        console.log('数据返回不正确')  
      }
    })
    .catch((err)=>{
      console.log('接口错误')
    })
  }
}


export const nextPage = () => ({
  type : constatns.NEXTPAGE
})

