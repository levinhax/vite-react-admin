import React from 'react'

import { Tabs } from 'antd'

const { TabPane } = Tabs

function OtherFile() {
  const handleTabChange = (key: string) => {
    console.log('handleTabChange: ', key)
  }

  return (
    <div className="file-wrapper">
      <Tabs defaultActiveKey="1" onChange={handleTabChange} destroyInactiveTabPane={true}>
        <TabPane tab="Tab 1" key="1">
          111
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          222
        </TabPane>
      </Tabs>
    </div>
  )
}

export default OtherFile
