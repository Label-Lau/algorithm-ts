import { minSubArrayLen } from './minSubArrayLen'

describe('minSubArrayLen 测试', () => {
    test('基本功能测试', () => {
        expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2)
        expect(minSubArrayLen(4, [1, 4, 4])).toBe(1)
        expect(minSubArrayLen(11, [1, 2, 3, 4, 5])).toBe(3)
    })

    test('边界条件测试', () => {
        expect(minSubArrayLen(3, [1, 1])).toBe(0)
        expect(minSubArrayLen(100, [])).toBe(0)
    })

    test('特殊情况测试', () => {
        expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0)
        expect(minSubArrayLen(3, [2, 3, 1, 2, 4, 3])).toBe(1)
        expect(minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8])).toBe(2)
    })
})
