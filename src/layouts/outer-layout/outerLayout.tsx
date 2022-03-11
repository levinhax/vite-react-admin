import './style.less'

import React from 'react'
import { Outlet } from 'react-router-dom'

function OuterLayout() {
  return (
    <div className="outer-layout">
      <Outlet />
    </div>
  )
}

export default OuterLayout
