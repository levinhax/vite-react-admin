import React from 'react'
import ComDownload from './components/download'
import ComFileParse from './components/parse'

import { Tabs } from 'antd'

const { TabPane } = Tabs

function OtherFile() {
  const handleTabChange = (key: string) => {
    console.log('handleTabChange: ', key)
  }

  return (
    <div className="file-wrapper">
      <Tabs defaultActiveKey="2" onChange={handleTabChange}>
        <TabPane tab="Tab 1" key="1">
          <ComDownload />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <ComFileParse />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default OtherFile
