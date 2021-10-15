import React from 'react'
import ComB from './components/comB'
import ComC from './components/comC'

const Demo = () => {
  return (
    <div className="hoc-demo">
      <h4>这是B组件</h4>
      <ComB />

      <br />
      <hr />
      <h4>这是C组件</h4>
      <ComC />
    </div>
  )
}

export default Demo

// =======================================================================
// import HelloClass from './HelloClass'

// interface Loading {
//   loading: boolean
// }

// // WrapperComponetn: 需要被包装的组件
// function HelloHOC<P>(WrapperComponetn: React.ComponentType<P>) {
//   // 定义 props 为 P 和 Loading 的交叉类型
//   // eslint-disable-next-line react/display-name
//   return class extends React.Component<P & Loading> {
//     render() {
//       // 解构 props，拆分出 loading
//       const { loading, ...props } = this.props
//       // {...props}：属性透传
//       return loading ? <div>Loading...</div> : <WrapperComponetn {...(props as P)} />
//     }
//   }
// }

// // 导出经过高阶组件包装后的组件
// export default HelloHOC(HelloClass)

// ==================================================================================

// const WrappedComponent = () => {
//   return <h4>普通组件</h4>
// }

// const HocComponent = (WrappedComponent: any) => {
//   console.log('高阶组件')
//   const newProps = { type: 'HOC' }

//   return <WrappedComponent {...newProps} />
// }

// export default HocComponent(WrappedComponent)
