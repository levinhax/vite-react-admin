import { isAllEqual, isRepeat } from '../../utils/helperArr'

describe('数组函数测试', () => {
  test('array isAllEqual', () => {
    expect(isAllEqual([1, 2, 3, 3, 4])).toBe(false)
  })

  test('array isRepeat', () => {
    expect(isRepeat([1, 2, 3, 3, 4])).toBe(true)
  })
})
