import React, { Component } from 'react'
import { Button } from 'antd'

interface Greeting {
  name: string
  firstName: string
  lastName: string
}

interface State {
  count: number
}

class HelloClass extends Component<Greeting, State> {
  // 初始化 state
  state: State = { count: 0 }
  // 默认属性值
  static defaultProps = {
    firstName: '',
    lastName: '',
  }
  render() {
    return <Button>hello {this.props.name}</Button>
  }
}

export default HelloClass
