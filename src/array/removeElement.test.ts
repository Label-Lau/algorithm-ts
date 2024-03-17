import { removeElement } from './removeElement'

describe('removeElement函数的测试用例', () => {
    test('正常情况下的测试', () => {
        expect(removeElement([3, 2, 2, 3], 3)).toBe(2)
        expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5)
    })

    test('输入数组为空的测试', () => {
        expect(removeElement([], 3)).toBe(0)
    })

    test('输入数组中没有需要移除的元素的测试', () => {
        expect(removeElement([1, 2, 3, 4, 5], 6)).toBe(5)
    })

    test('输入数组中所有元素都需要移除的测试', () => {
        expect(removeElement([7, 7, 7, 7, 7], 7)).toBe(0)
    })

    test('输入数组中只有一个元素的测试', () => {
        expect(removeElement([8], 8)).toBe(0)
        expect(removeElement([9], 10)).toBe(1)
    })
})
