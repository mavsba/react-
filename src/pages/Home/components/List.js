import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListWarpper,ListItem,ListTitle,ListInfo,Loading } from '../style.js'
import { actionCreateors } from '../store'
import { Link } from 'react-router-dom'

class List extends Component {

  render(){
    let { articleList,page,reqLoadingList } = this.props
    return(
      <div>
       {
         articleList.map((item)=>{
           return (
              <ListWarpper key={item.id}>
                <ListItem>
                  <Link to={`/detail${item.id}`}>
                  <ListTitle>{item.title}</ListTitle>
                  </Link>
                  <ListInfo>{item.desc}</ListInfo>
                </ListItem>
                <img
                  className="pic"
                  src="http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg"  alt=""/>
              </ListWarpper>
           )
         })
       }
        <Loading onClick={()=>{reqLoadingList(page)}}>阅读更多</Loading>
      </div>
    )
  }
}

let mapState = (state)=>({
  articleList:state.home.articleList,
  page:state.home.page,
})


let mapDispatch = (dispatch)=>({
  reqArticleList:(...args)=>dispatch(actionCreateors.reqArticleList(...args)),
  reqLoadingList:(...args)=>dispatch(actionCreateors.reqLoadingList(...args)),
})

export default connect(mapState,mapDispatch)(List)