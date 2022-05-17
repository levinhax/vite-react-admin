import React, { useState, useEffect } from 'react'
import { Tooltip, Button, ConfigProvider } from 'antd'

function ThemeChange() {
  const [theme, setTheme] = useState('light')

  const [colorState] = useState({
    primaryColor: '#1890ff',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  })

  ConfigProvider.config({
    // prefixCls: 'custom',
    theme: colorState,
  })

  useEffect(() => {
    initTheme()
  }, [])

  useEffect(() => {
    resetGlobalTheme(theme)
  }, [theme])

  const initTheme = () => {
    const themeType = localStorage.getItem('theme') || 'light'
    setTheme(themeType)
  }

  const resetGlobalTheme = (themeType: string) => {
    if (themeType === 'dark') {
      Object.assign(colorState, { primaryColor: 'rgb(37, 184, 100)' })
    } else {
      Object.assign(colorState, { primaryColor: '#1890ff' })
    }
    ConfigProvider.config({
      // prefixCls: 'custom',
      theme: colorState,
    })
  }

  const handleChangeTheme = () => {
    const themeType = theme === 'light' ? 'dark' : 'light'
    setTheme(themeType)
    localStorage.setItem('theme', themeType)
  }

  return (
    <div className="navbar-item">
      <Tooltip title={`点击切换为${theme === 'light' ? '暗黑' : '亮色'}模式`}>
        <Button onClick={handleChangeTheme}>{theme === 'light' ? '亮色' : '暗黑'}</Button>
      </Tooltip>
    </div>
  )
}

export default ThemeChange
