import React, { Component } from 'react'

function ComA<P>(WrapperComponent: React.ComponentType<P>) {
  // 定义 props 为 P 和 Loading 的交叉类型
  return class A extends Component {
    render() {
      const { ...props } = this.props
      return (
        <div className="a-container">
          <div className="head">
            <div>提示</div>
            <div>x</div>
          </div>
          <div className="content">
            这是内容部分
            <WrapperComponent {...(props as P)} />
          </div>
        </div>
      )
    }
  }
}

export default ComA
