/**
 * @description 连续字符 test
 * @author 双越老师
 */

import {
    findContinuousChar1,
    findContinuousChar2,
    findContinuousChar3
} from './continuous-char'

// describe('连续字符和长度', () => {
//     it('正常情况', () => {
//         const str = 'aabbcccddeeee11223'
//         const res = findContinuousChar1(str)
//         expect(res).toEqual({ char: 'e', length: 4 })
//     })
//     it('空字符串', () => {
//         const res = findContinuousChar1('')
//         expect(res).toEqual({ char: '', length: 0 })
//     })
//     it('无连续字符', () => {
//         const str = 'abc'
//         const res = findContinuousChar1(str)
//         expect(res).toEqual({ char: 'a', length: 1 })
//     })
//     it('全部都是连续字符', () => {
//         const str = 'aaa'
//         const res = findContinuousChar1(str)
//         expect(res).toEqual({ char: 'a', length: 3 })
//     })
// })
describe('findContinuousChar1 函数测试', () => {
    it('当输入空字符串时，应该返回空对象', () => {
        const input = ''
        const result1 = findContinuousChar1(input)
        const result2 = findContinuousChar2(input)
        const result3 = findContinuousChar3(input)
        const expected = { char: '', length: 0 }
        expect(result1).toEqual(expected)
        expect(result2).toEqual(expected)
        expect(result3).toEqual(expected)
    })

    it('当输入只包含一个字符的字符串时，应该返回该字符和长度为 1', () => {
        const input = 'a'
        const result1 = findContinuousChar1(input)
        const result2 = findContinuousChar2(input)
        const result3 = findContinuousChar3(input)
        const expected = { char: 'a', length: 1 }
        expect(result1).toEqual(expected)
        expect(result2).toEqual(expected)
        expect(result3).toEqual(expected)
    })

    it('当输入普通字符串时，应该返回出现次数最多的字符和其长度', () => {
        const input = 'halloween'
        const result1 = findContinuousChar1(input)
        const result2 = findContinuousChar2(input)
        const result3 = findContinuousChar3(input)
        const expected = { char: 'l', length: 2 }
        expect(result1).toEqual(expected)
        expect(result2).toEqual(expected)
        expect(result3).toEqual(expected)
    })

    it('当输入字符串中有多个出现次数最多的字符时，应该只返回其中任意一个', () => {
        const input = 'happyhalloween'
        const result1 = findContinuousChar1(input)
        const result2 = findContinuousChar2(input)
        const result3 = findContinuousChar3(input)
        const expected = { char: 'p', length: 2 }
        expect(result1).toEqual(expected)
        expect(result2).toEqual(expected)
        expect(result3).toEqual(expected)
    })

    it('当输入字符串中每个字符都不同的时候，函数应该仍然能在合理时间内处理', () => {
        const input = 'abcdefghijklmnopqrstuvwxyz'
        const result1 = findContinuousChar1(input)
        const result2 = findContinuousChar2(input)
        const result3 = findContinuousChar3(input)
        const expected = { char: 'a', length: 1 }
        expect(result1).toEqual(expected)
        expect(result2).toEqual(expected)
        expect(result3).toEqual(expected)
    })
})
