import React from 'react'

import { Tabs } from 'antd'
import ComReactVirtualized from './components/react-virtualized'
import VirtualListTab from './components/VirtualListTab'
import ScrollLoadTab from './components/ScrollLoadTab'

const { TabPane } = Tabs

function OtherFile() {
  const handleTabChange = (key: string) => {
    console.log('handleTabChange: ', key)
  }

  return (
    <div className="file-wrapper">
      <Tabs defaultActiveKey="1" onChange={handleTabChange} destroyInactiveTabPane={true}>
        <TabPane tab="ReactVirtualized" key="1">
          <ComReactVirtualized />
        </TabPane>
        <TabPane tab="虚拟列表" key="2">
          <VirtualListTab />
        </TabPane>
        <TabPane tab="滚动懒加载" key="3">
          <ScrollLoadTab />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default OtherFile
