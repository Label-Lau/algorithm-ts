/**
 * @description Array rotate test
 * @author 双越老师
 */

import { rotate1, rotate2 } from './array-rotate'

describe('数组旋转', () => {
    it('正常情况', () => {
        const k = 3

        const res1 = rotate1([1, 2, 3, 4, 5, 6, 7], k)
        const res2 = rotate2([1, 2, 3, 4, 5, 6, 7], k)
        expect(res1).toEqual([5, 6, 7, 1, 2, 3, 4]) // 断言
        expect(res2).toEqual([5, 6, 7, 1, 2, 3, 4]) // 断言
    })

    it('数组为空', () => {
        const res1 = rotate2([], 3)
        const res2 = rotate2([], 3)
        expect(res1).toEqual([]) // 断言
        expect(res2).toEqual([]) // 断言
    })

    it('k 是负值', () => {
        const k = -3

        const res1 = rotate1([1, 2, 3, 4, 5, 6, 7], k)
        const res2 = rotate2([1, 2, 3, 4, 5, 6, 7], k)
        expect(res1).toEqual([5, 6, 7, 1, 2, 3, 4]) // 断言
        expect(res2).toEqual([5, 6, 7, 1, 2, 3, 4]) // 断言
    })

    it('k 是 0', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 0

        const res1 = rotate1([1, 2, 3, 4, 5, 6, 7], k)
        const res2 = rotate2([1, 2, 3, 4, 5, 6, 7], k)
        expect(res1).toEqual(arr) // 断言
        expect(res2).toEqual(arr) // 断言
    })

    it('k 不是数字', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 'abc'

        // @ts-ignore
        const res1 = rotate1([1, 2, 3, 4, 5, 6, 7], k)
        // @ts-ignore
        const res2 = rotate2([1, 2, 3, 4, 5, 6, 7], k)
        expect(res1).toEqual(arr) // 断言
        expect(res2).toEqual(arr) // 断言
    })
})
