import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper,TopicItem } from '../style.js'
import { actionCreateors } from '../store'

class Topic extends Component {

  render(){
    let { TopicImg } = this.props
    return(
      <TopicWrapper>
        {
          TopicImg.map((item) => {
            return(
              <TopicItem key={item.id}>
                <img
                 className='topic-pic'
                 src={item.imgUrl} alt=""/>
                {item.title}
              </TopicItem>
            )
          })
        }
        
      </TopicWrapper>
    )
  }

  componentDidMount(){
    this.props.getTopicImg()
  }
  


}



let mapState = (state) => ({
  TopicImg: state.home.TopicImg
})

let mapDispatch = (dispatch) => ({
  getTopicImg:(...args)=>dispatch(actionCreateors.getTopicImg(...args)),
})

export default connect(mapState,mapDispatch)(Topic)