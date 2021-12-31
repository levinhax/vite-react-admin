import './style.less'

import { Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Link, useLocation } from 'react-router-dom'

import Icon from '@/components/custom-svg-icon'
import { IRoute } from '@/router/innerRouter'

import logo from '../../../../assets/svg/logo.svg'
import NavLink from './nav-link'

import menus from '../../../../constants/menu'

interface IProps {
  routeMap: IRoute[]
}

/**
 * 侧边菜单
 */
const renderThumb = (props: any) => {
  const { style, ...rest } = props

  const thumbStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255,255,255,.2)',
    borderRadius: '3px',
    cursor: 'pointer',
  }

  return <div style={{ ...style, ...thumbStyle }} {...rest} />
}

const SiderBar: React.FC<IProps> = ({ routeMap }) => {
  const location = useLocation()

  // 当前激活的菜单
  const [activeMenu, setActiveMenu] = useState('')

  useEffect(() => {
    const currentItem = findCurrentMenu(menus, location.pathname)
    if (!currentItem?.hiddenInMenu) {
      setActiveMenu(location.pathname)
    }
    // setActiveMenu(location.pathname)
  }, [location.pathname])

  const handelClickMenu = (e: any) => {
    const currentItem = findCurrentMenu(menus, e.key)
    if (!currentItem?.hiddenInMenu) {
      setActiveMenu(e.key)
    }
    // setActiveMenu(e.key)
  }

  const findCurrentMenu = (menus: Array<any>, currentPath: string): any => {
    for (let i = 0; i < menus.length; i++) {
      const menu = menus[i]
      const { path } = menu
      if (path === currentPath) return menu

      const currentMenu = findCurrentMenu(menu.children || [], currentPath)
      if (currentMenu) return currentMenu
    }
    return null
  }

  // 根据路由配置生成菜单
  const getMenuItem = (route: IRoute) => {
    const { title, path, icon, hiddenInMenu, children } = route

    if (children) {
      return (
        <Menu.SubMenu key={path + ''} title={title} icon={icon ? <Icon name={icon} /> : null}>
          {children.map((route: IRoute) => getMenuItem(route))}
        </Menu.SubMenu>
      )
    }
    return (
      !hiddenInMenu && (
        <Menu.Item key={path + ''}>
          <NavLink path={path + ''} title={title} icon={icon} />
        </Menu.Item>
      )
    )
  }

  return (
    <Scrollbars renderThumbHorizontal={renderThumb} renderThumbVertical={renderThumb}>
      <div className="side-bar">
        <div className="side-bar__logo">
          <Link to="/dashboard">
            <img className="image" src={logo} alt="" />
            <div className="title">管理系统</div>
          </Link>
        </div>

        <Menu theme="dark" mode="inline" selectedKeys={[activeMenu]} onClick={handelClickMenu}>
          {routeMap.map(route => getMenuItem(route))}
        </Menu>
      </div>
    </Scrollbars>
  )
}

export default SiderBar
