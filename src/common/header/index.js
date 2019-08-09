import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreateors } from './store'
import { Link } from 'react-router-dom'
import {
        HeaderWrapper, 
        Logo,
        NavItem,
        Nav,
        Search,
        SearchWrapper,
        InfoWrapper,
        InfoHeader,
        InfoSwitch,
        InfoItemWarpper,
        InfoItem,
        Addition,
        Button,
      } from './style'
 class Header extends Component {
  
  state = {
    num : 0
  }

  handleFocus = ()=>{
    this.props.handleFocus(true)
    this.props.getList()
  }

  handleBlur = ()=>{
    this.props.handleFocus(false)
  }

  handleMouseEnter = () => {
    this.props.totalMouseIn(true)
  }

  handleMouseLeave = () => {
    this.props.totalMouseIn(false)
  }

  nextPage = () => {
    this.props.nextPage()
    this.setState({
      num:this.state.num+360
    },()=>{
      this.refs.spin.style.transform = `rotate(${this.state.num}deg)`
    })
   
  }


  render() {
    let {focused,list,page,mouseIn} = this.props
    let newList = []
    if(list.length){
      for(let i = (page-1)*10; i < page*10  ; i++){
        if(list[i]){
          newList.push(list[i])
        }
      }
    }
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <Link to="/detail">
          <NavItem className="left active">首页1</NavItem>
          </Link>
          <Link to="/">
         <NavItem className="left">下载App</NavItem>
         </Link>
         {/* {
           this.props.loginFlge ?<Link to="/login"><NavItem className="right">退出</NavItem></Link>:<Link to="/login"><NavItem className="right">登陆</NavItem></Link>
         }
          */}
         <Link to="/login"><NavItem className="right">退出</NavItem></Link>
         <NavItem className="right"><span className="iconfont" style={{fontSize:20}}>&#xe636;</span></NavItem>
         <SearchWrapper>
              <div style={{position: 'relative'}}>
              <Search 
              onFocus = { this.handleFocus }
              onBlur = { this.handleBlur }
              className = { focused ? 'focused' : '' } 
              placeholder = "搜索"></Search>
              <span className = { focused  ? 'focused iconfont zoom' : 'iconfont zoom' }  style={{ height : 30 }}>&#xe614;</span>
              </div>
              <InfoWrapper 
                className = { focused || mouseIn ? '' : 'active' }
                onMouseEnter= { this.handleMouseEnter }
                onMouseLeave= { this.handleMouseLeave }
                >
                <InfoHeader>
                  热门搜索
                  <InfoSwitch onClick = {this.nextPage}>
                    <span 
                    ref="spin"
                    className="iconfont spin">&#xe870;</span>
                  &nbsp;缓一缓</InfoSwitch>
                    <InfoItemWarpper>
                      {
                        newList.map((item,index)=>{
                          return <InfoItem key={index} >{item}</InfoItem>
                        })
                      }
                    </InfoItemWarpper>
                </InfoHeader>
              </InfoWrapper>
         </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="bg">  <span className="iconfont" >&#xe615;</span>&nbsp;写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
        
      </HeaderWrapper>
    )
  }
}

let mapStateToProps = (state)=>({
  focused:state.header.focused,
  mouseIn:state.header.mouseIn,
  list:state.header.list,
  page:state.header.page,
  totalPage:state.header.totalPage,
  loginFlge:state.login.loginFlge
})

let mapDispatchToProps = (dispatch)=>({
  handleFocus:(...args)=>dispatch(actionCreateors.handleFocus(...args)),
  getList:(...args)=>dispatch(actionCreateors.getList(...args)),
  totalMouseIn:(...args)=>dispatch(actionCreateors.totalMouseIn(...args)),
  nextPage:(...args)=>dispatch(actionCreateors.nextPage(...args)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)
