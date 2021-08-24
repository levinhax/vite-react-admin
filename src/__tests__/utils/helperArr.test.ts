import { isAllEqual, isRepeat, noRepeat } from '../../utils/helperArr'

describe('数组函数测试', () => {
  test('array isAllEqual', () => {
    expect(isAllEqual([1, 2, 3, 3, 4])).toBe(false)
  })

  test('array isRepeat', () => {
    expect(isRepeat([1, 2, 3, 3, 4])).toBe(true)
  })

  test('array noRepeat', () => {
    // expect(noRepeat([1, 2, 3, 3, 4])).toStrictEqual([1, 2, 3, 4])
    expect(noRepeat([1, 2, 1, 3])).toStrictEqual([1, 2, 3])
  })
})
