import './style.less'

import { BackTop, Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import service from '@/api/account'
import InnerRouter, { initRoutes, IRoute } from '@/router/innerRouter'
import { routesMap } from '@/router/innerRouter/initRoutes'

import menus from '../../constants/menu'
import HeaderBar from './components/header-bar'
import SideBar from './components/side-bar'

function InnerLayout() {
  const history = useHistory()
  // 是否折叠侧边菜单
  const [collapse, setCollapse] = useState(false)
  // 路由配置
  const [routeMap, setRouteMap] = useState<IRoute[]>([])

  useEffect(() => {
    // 校验token，获取route时使用权限处理函数
    // setRouteMap([])
    const token = localStorage.getItem('token')
    if (import.meta.env.VITE_USE_MOCK === 'true') {
      // 使用mock数据
      if (!token) {
        history.replace('/account/login')
      } else {
        const params = {}
        service.getUserInfo(params).then(res => {
          console.log('res: ', res.data.permission)
          // accountStore.setAccountInfo(res)
          setRouteMap(initRoutes(res.data.permission))
        })
      }
    } else {
      if (!token) {
        history.replace('/account/login')
      }
      setRouteMap(menus)
    }
  }, [history])

  // 切换菜单折叠状态
  const triggerCollapse = () => {
    setCollapse(state => !state)
  }

  return (
    <Layout className="inner-layout">
      <Layout.Sider className="inner-layout__sider" width={160} trigger={null} collapsible={true} collapsed={collapse}>
        <SideBar routeMap={routeMap} />
      </Layout.Sider>

      <Layout id="layoutMain" className="inner-layout__main">
        <HeaderBar collapse={collapse} onTrigger={triggerCollapse} />

        <div className="content">
          {/* <InnerRouter /> */}
          <InnerRouter routeMap={routesMap} />
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
