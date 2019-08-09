import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  HomeWarpper,
  LeftContent,
  RightContent,
  Top
} from './style.js'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'

class Home extends Component {

  state = {
    topShow:false,
    jj:0
  }


  Top = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth" 
    })
  }

  componentDidMount(){
    window.addEventListener('scroll',()=>{
      if(document.documentElement.scrollTop>100){
        if( this.refs.top){
           this.refs.top.style.display = 'block'
         }
      }else{
        if( this.refs.top){
          this.refs.top.style.display = 'none'
        }
      }
    })
  }  

  
  oo = () =>{
    this.props.numjiajia()
    this.setState({
      jj:this.state.jj+1
    })
  }

  render(){
    return(
      <HomeWarpper>
        {this.props.num}~~~~~~~~~~
        {this.state.jj}
        <LeftContent>
          <img
            onClick={this.oo}
            className="lunbo"
            src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="首页海报"/>
            <Topic></Topic>
            <List></List>
        </LeftContent>
        <RightContent>
          <Recommend></Recommend>
          <Writer></Writer> 
        </RightContent>
        <Top
         ref='top'
         style={{display:'none'}}
         onClick={this.Top}>置顶</Top>
      </HomeWarpper> 
    )
  }
}

let mapState = (state) => ({
  num : state.home.num
})

let mapDispatch = (dispatch) => {
  let numjiajia = () =>(
    {
      type :'numjiajia'
    }
  )
 return{
  numjiajia:(...args)=>dispatch(numjiajia(...args)),
 }
}

export default connect(mapState,mapDispatch)(Home)