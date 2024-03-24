import { generateMatrix } from './generateMatrix'

describe('生成旋转矩阵', () => {
    test('输入为正整数', () => {
        expect(generateMatrix(2)).toEqual([
            [1, 2],
            [4, 3]
        ])
        expect(generateMatrix(3)).toEqual([
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5]
        ])
        expect(generateMatrix(4)).toEqual([
            [1, 2, 3, 4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10, 9, 8, 7]
        ])
        expect(generateMatrix(5)).toEqual([
            [1, 2, 3, 4, 5],
            [16, 17, 18, 19, 6],
            [15, 24, 25, 20, 7],
            [14, 23, 22, 21, 8],
            [13, 12, 11, 10, 9]
        ])
    })

    test('输入为0', () => {
        expect(generateMatrix(0)).toEqual([])
    })

    test('输入为负数', () => {
        expect(generateMatrix(-1)).toEqual([])
        expect(generateMatrix(-2)).toEqual([])
    })
})
