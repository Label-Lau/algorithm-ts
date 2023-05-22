import { quickSort } from './quickSort'

describe('quickSort', () => {
    it('当给定一个空数组时，应该返回一个空数组', () => {
        expect(quickSort([])).toEqual([])
    })

    it('当给定一个只有一个元素的数组时，应该返回该数组', () => {
        expect(quickSort([1])).toEqual([1])
    })

    it('当给定一个包含多个数字的数组时，应该按升序排序', () => {
        expect(quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
            1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9
        ])
    })

    it('当给定一个包含负数的数组时，也应该按升序排序', () => {
        expect(quickSort([3, -1, 4, -1, 5, 9, 2, -6, 5, 3, 5])).toEqual([
            -6, -1, -1, 2, 3, 3, 4, 5, 5, 5, 9
        ])
    })
})
