import React from 'react'

import { Form, Input } from 'antd'

function OtherRegExp() {
  const validateReg1 = (val: string) => {
    console.log('validateReg1: ', val)
  }
  return (
    <div className="regexp-wrapper">
      <h3>正则校验</h3>
      <div style={{ width: 640, minHeight: 200, border: '1px dotted #ddd' }}>
        <Form name="basic" labelCol={{ span: 16 }} wrapperCol={{ span: 8 }} initialValues={{ remember: true }}>
          <Form.Item label="Username" name="username">
            <Input placeholder="请输入" onBlur={e => validateReg1(e.target.value)} />
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default OtherRegExp
