import './styles/index.css'
import './styles/app.less'

import { ConfigProvider } from 'antd'
import zh_CN from 'antd/es/locale-provider/zh_CN'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zh_CN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
