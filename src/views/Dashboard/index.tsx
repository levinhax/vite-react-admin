import './style.less'

import React from 'react'

import logo from '../../assets/svg/logo.svg'

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <img src={logo} className="logo" alt="logo" />
    </div>
  )
}

export default Dashboard
