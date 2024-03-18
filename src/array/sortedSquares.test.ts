import { sortedSquares } from './sortedSquares'

describe('测试sortedSquares函数', () => {
    test('测试正常情况', () => {
        expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100])
        expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121])
    })

    test('测试包含0的情况', () => {
        expect(sortedSquares([-2, 0, 2])).toEqual([0, 4, 4])
        expect(sortedSquares([0, 0, 0])).toEqual([0, 0, 0])
    })

    test('测试只有一个元素的情况', () => {
        expect(sortedSquares([-1])).toEqual([1])
        expect(sortedSquares([0])).toEqual([0])
        expect(sortedSquares([1])).toEqual([1])
    })

    test('测试所有元素都是负数的情况', () => {
        expect(sortedSquares([-3, -2, -1])).toEqual([1, 4, 9])
    })

    test('测试所有元素都是正数的情况', () => {
        expect(sortedSquares([1, 2, 3])).toEqual([1, 4, 9])
    })
})
