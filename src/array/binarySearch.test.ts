import { binarySearch } from './binarySearch'

describe('二分查找函数测试', () => {
    test('正常情况下的测试', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2)
        expect(binarySearch([1, 2, 3, 4, 5, 6], 4)).toBe(3)
    })

    test('目标值在数组的边界上的测试', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0)
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4)
    })

    test('目标值不在数组中的测试', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 0)).toBe(-1)
        expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1)
    })

    test('数组为空的测试', () => {
        expect(binarySearch([], 1)).toBe(-1)
    })

    test('数组只有一个元素的测试', () => {
        expect(binarySearch([1], 1)).toBe(0)
        expect(binarySearch([2], 1)).toBe(-1)
    })
})
