/**
 * @description 数组扁平化 test
 * @author Lau
 */

import { flatten1, flatten2 } from './array-flatten'

describe('数组扁平化', () => {
    it('空数组', () => {
        const res1 = flatten1([])
        const res2 = flatten2([])
        expect(res1).toEqual([])
        expect(res2).toEqual([])
    })

    it('非嵌套数组', () => {
        const arr = [1, 2, 3]
        const res1 = flatten1(arr)
        const res2 = flatten2(arr)
        expect(res1).toEqual([1, 2, 3])
        expect(res2).toEqual([1, 2, 3])
    })

    it('一级嵌套', () => {
        const arr = [1, 2, [10, 20], 3]
        const res1 = flatten1(arr)
        const res2 = flatten2(arr)
        expect(res1).toEqual([1, 2, 10, 20, 3])
        expect(res2).toEqual([1, 2, 10, 20, 3])
    })

    it('二级嵌套', () => {
        const arr = [1, 2, [10, [100, 200], 20], 3]
        const res1 = flatten1(arr)
        const res2 = flatten2(arr)
        expect(res1).toEqual([1, 2, 10, [100, 200], 20, 3])
        expect(res2).toEqual([1, 2, 10, [100, 200], 20, 3])
    })
})
