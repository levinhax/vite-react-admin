import React from 'react'
import './index.less'

function Border(props: any) {
  return (
    <div className={`border-wrapper ${props.className}`}>
      {props.className.includes('border8') && <div className="content"></div>}
      {!props.className.includes('border8') &&
        props.children.map((e: any) => {
          return e
        })}
      {/* css边框 */}
    </div>
  )
}

export default Border
