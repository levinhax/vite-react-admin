import React from 'react'
import ComLiveVideo from './components/live'

import { Tabs } from 'antd'

const { TabPane } = Tabs

function OtherVideo() {
  const handleTabChange = (key: string) => {
    console.log('handleTabChange: ', key)
  }

  return (
    <div className="file-wrapper">
      <Tabs defaultActiveKey="1" onChange={handleTabChange} destroyInactiveTabPane={true}>
        <TabPane tab="Tab 1" key="1">
          <ComLiveVideo />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          2
        </TabPane>
      </Tabs>
    </div>
  )
}

export default OtherVideo
