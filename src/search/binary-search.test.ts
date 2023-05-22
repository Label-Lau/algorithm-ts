/**
 * @description 二分查找 test
 * @author 双越老师
 */

import { binarySearch1, binarySearch2 } from './binary-search'

describe('二分查找', () => {
    it('正常情况', () => {
        const arr = [10, 20, 30, 40, 50]
        const target = 40
        const index1 = binarySearch1(arr, target)
        const index2 = binarySearch2(arr, target)
        expect(index1).toBe(3)
        expect(index2).toBe(3)
    })

    it('空数组', () => {
        expect(binarySearch1([], 100)).toBe(-1)
        expect(binarySearch2([], 100)).toBe(-1)
    })

    it('找不到 target', () => {
        const arr = [10, 20, 30, 40, 50]
        const target = 400
        const index1 = binarySearch1(arr, target)
        const index2 = binarySearch2(arr, target)
        expect(index1).toBe(-1)
        expect(index2).toBe(-1)
    })
})
