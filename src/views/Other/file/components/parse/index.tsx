import React, { useState } from 'react'
import XLSX from 'xlsx'
import { Upload, message, Button, Table } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import './index.less'

function FileParse() {
  const [dataUploadFile, setDataUploadFile] = useState<any>()
  const [dataUploadFileList, setDataUploadFileList] = useState<Array<any>>([])

  const [dataTableColumn, setDataTableColumn] = useState<Array<{ title: string; dataIndex: string; key: string }>>([])
  const [dataTableData, setDataTableData] = useState<Array<any>>([])

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: any) {
      //   if (info.file.status !== 'uploading') {
      //     console.log(info.file, info.fileList)
      //   }
      //   if (info.file.status === 'done') {
      //     message.success(`${info.file.name} file uploaded successfully`)
      //   } else if (info.file.status === 'error') {
      //     message.error(`${info.file.name} file upload failed.`)
      //   }

      let fileList = [...info.fileList]
      fileList = fileList.slice(-1)
      fileList = fileList.map(file => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url
        }
        return file
      })
      setDataUploadFileList(fileList)
    },
    beforeUpload(file: any) {
      console.log('beforeUpload: ', file)
      setDataUploadFile(file)

      if (/(.xlsx|.xls)$/.test(file.name)) {
        file2Excel(file).then(tab => {
          console.log('xlsx tab: ', tab)
          handle2TableData(tab)
        })
      }

      if (/(.csv|.txt)$/.test(file.name)) {
        file2Csv(file).then(tab => {
          console.log('csv tab: ', tab)
          handle2TableData(tab)
        })
      }

      return false
    },
  }

  const file2Excel = (file: any) => {
    return new Promise(resolve => {
      const reader = new FileReader()
      reader.readAsArrayBuffer(file) // readAsArrayBuffer类型
      // reader.readAsBinaryString(file) // readAsBinaryString类型

      reader.onload = (e: any) => {
        //   const data: ArrayBuffer = e.target && e.target.result;
        const data = e.target && e.target.result
        // readAsArrayBuffer类型
        const wb = XLSX.read(new Uint8Array(data), {
          type: 'array',
        })

        // readAsBinaryString类型
        // const wb = XLSX.read(data, {
        //   type: 'binary',
        // })

        // const result = []
        // wb.SheetNames.forEach(sheetName => {
        //   result.push({
        //     sheetName,
        //     sheet: XLSX.utils.sheet_to_json(wb.Sheets[sheetName]),
        //   })
        // })

        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname]
        const result = XLSX.utils.sheet_to_json(ws, { header: 1 })
        resolve(result)
      }
    })
  }

  const file2Csv = (file: any) => {
    return new Promise(resolve => {
      const reader = new FileReader()
      // reader.readAsText(file, 'utf-8')
      reader.readAsText(file, 'gbk')
      reader.onload = (e: any) => {
        // const data = reader.result
        const data = e.target && e.target.result
        // let arr = data.split('\n')
        let arr = data.split(/\r?\n|\r/) // 解决不同系统换行符问题
        let csvResult = arr.map((item: any) => item.split(','))
        if (csvResult[csvResult.length - 1]) resolve(csvResult)
      }
    })
  }

  const handle2TableData = (data: any) => {
    if (data.length < 2) {
      message.error('请检查文件信息是否正确')
    }
    const tableHead = data[0]
    const tableHeadSet = new Set(tableHead)
    if (tableHeadSet.size !== tableHead.length) {
      message.error('请检查文件信息是否正确')
    }
    // let reg = new RegExp('"', 'g') // 简单处理包围符
    const tableColumns: Array<any> = []
    tableHead.map((item: any) => {
      tableColumns.push({
        title: item, // item.replace(reg, '')
        dataIndex: item,
        key: item,
      })
    })
    setDataTableColumn(tableColumns)

    let excelResult = data.map((item: any, ind: number) => {
      let it: any = {}
      item.forEach((v: string, i: number) => {
        it[tableHead[i]] = v
        it.key = ind
      })
      return it
    })
    console.log('excelResult: ', excelResult)
    setDataTableData(excelResult)

    console.log('dataUploadFile: ', dataUploadFile)
  }

  return (
    <div className="file-wrapper">
      <h3 className="title">文件解析</h3>
      <div className="content">
        <Upload {...props} fileList={dataUploadFileList}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>

        <div className="table-container">
          <Table dataSource={dataTableData} columns={dataTableColumn} />
        </div>
      </div>
    </div>
  )
}

export default FileParse
