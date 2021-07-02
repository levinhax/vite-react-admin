import './style.less'

import { BackTop, Layout } from 'antd'
import React, { useState } from 'react'

import InnerRouter from '@/router/innerRouter'

import HeaderBar from './components/header-bar'

function InnerLayout() {
  // 是否折叠侧边菜单
  const [collapse, setCollapse] = useState(false)

  // 切换菜单折叠状态
  const triggerCollapse = () => {
    setCollapse(state => !state)
  }

  return (
    <Layout className="inner-layout">
      <Layout.Sider
        className="inner-layout__sider"
        width={160}
        trigger={null}
        collapsible={true}
        collapsed={collapse}
      ></Layout.Sider>

      <Layout id="layoutMain" className="inner-layout__main">
        <HeaderBar collapse={collapse} onTrigger={triggerCollapse} />

        <div className="content">
          <InnerRouter />
        </div>

        <BackTop
          style={{ right: '50px' }}
          target={() => document.getElementById('layoutMain')!}
          visibilityHeight={600}
        />
      </Layout>
    </Layout>
  )
}

export default InnerLayout
