import React from 'react'
import ComAList from './components/comAList'
import ComBList from './components/comBList'

function App() {
  return (
    <div className="App">
      <ComAList title="我是父组件传入的title参数"></ComAList>
      <ComBList></ComBList>
    </div>
  )
}

export default App
