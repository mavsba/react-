import React, { Component } from 'react'
import { connect } from 'react-redux'

class Detail extends Component {

  render(){
    console.log(this.props)
    return(
      <h1 style={{fontSize:'100px'}}>{this.props.match.params.id}</h1>
    )
  }
}


export default connect(null,null)(Detail)