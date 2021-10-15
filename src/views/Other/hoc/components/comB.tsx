import React, { Component } from 'react'
import ComA from './comA'

class B extends Component {
  render() {
    return <div>这是B组件</div>
  }
}

export default ComA(B)
