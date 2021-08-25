import { isAllEqual, isRepeat, noRepeat, flattenArr } from '../../utils/helperArr'

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

  test('array flattenArr', () => {
    const arr1 = [
      {
        name: 'arr1',
        children: [
          {
            name: 'arr1-1',
          },
        ],
      },
      {
        name: 'arr2',
      },
    ]
    const arr2 = [
      {
        name: 'arr1',
      },
      {
        name: 'arr1-1',
      },
      {
        name: 'arr2',
      },
    ]
    expect(flattenArr(arr1)).toStrictEqual(arr2)
  })
})
