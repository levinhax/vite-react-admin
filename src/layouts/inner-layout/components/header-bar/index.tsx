import './style.less'

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import React from 'react'

import AvatarMenu from '../avatar-menu'
import PageBreadcrumb from '../page-breadcrumb'
import ThemeChange from '../theme-change'

interface IHeaderProps {
  collapse: boolean
  onTrigger: () => void
}

const HeaderBar: React.FC<IHeaderProps> = props => {
  const { collapse, onTrigger } = props

  return (
    <div className="header-bar">
      <div className="header-bar-left">
        {collapse ? (
          <MenuUnfoldOutlined className="header-bar__trigger" onClick={onTrigger} />
        ) : (
          <MenuFoldOutlined className="header-bar__trigger" onClick={onTrigger} />
        )}

        <PageBreadcrumb />
      </div>

      <div className="header-bar-right">
        <div style={{ marginRight: '18px' }}>
          <ThemeChange />
        </div>
        <AvatarMenu />
      </div>
    </div>
  )
}

export default HeaderBar
