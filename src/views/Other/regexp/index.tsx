import React, { useState } from 'react'

import { Form, Input, Space, Tooltip, Typography } from 'antd'
import { helperValidateUserName } from '@/utils/helperReg'

function OtherRegExp() {
  const [initValues] = useState({
    param1: 'initVal',
  })
  // const validateReg = (val: string) => {
  //   console.log('validateReg1: ', val)
  // }
  const validateReg = (_: any, value: string) => {
    if (value) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请检查您输入的数据!'))
  }

  // ========================== 校验规则 =================================================
  const validateReg1 = (_: any, value: string) => {
    console.log('validateReg1: ', value, helperValidateUserName(value))
    if (value && helperValidateUserName(value)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请检查您输入的数据!'))
  }

  return (
    <div className="regexp-wrapper">
      <h3>正则校验</h3>
      <div style={{ width: 640, minHeight: 200, border: '1px dotted #ddd', padding: 20 }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={initValues}
          validateTrigger="onChange"
        >
          <Form.Item label="正则校验项1" name="param1" rules={[{ validator: validateReg }]} validateTrigger="onBlur">
            {/* <Input placeholder="请输入" onBlur={e => validateReg(e.target.value)} /> */}
            <Input placeholder="请输入" />
          </Form.Item>

          <Form.Item label="用户名">
            <Space>
              <Form.Item name="username" noStyle rules={[{ validator: validateReg1 }]} validateTrigger="onBlur">
                <Input style={{ width: 210 }} placeholder="请输入" />
              </Form.Item>
              <Tooltip title="4到16位（字母，数字，下划线，减号）">
                <Typography.Link href="#">规则</Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default OtherRegExp
