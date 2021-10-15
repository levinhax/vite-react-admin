import React, { Component } from 'react'
import ComA from './comA'

class C extends Component {
  render() {
    return <div>这是C组件</div>
  }
}

export default ComA(C)
