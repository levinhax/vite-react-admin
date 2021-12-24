import { helperPositiveNum, helperNegativeNum } from '../../utils/helperNum'

describe('数值测试', () => {
  it('Reg 正数', () => {
    expect(helperPositiveNum('123.220018')).toBe(true)
  })

  it('Reg 负数', () => {
    expect(helperNegativeNum('-2.90225')).toBe(true)
  })
})
