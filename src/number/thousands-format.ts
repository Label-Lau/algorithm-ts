/**
 * @description 千分位格式化
 * @author 双越老师
 */

/**
 * 千分位格式化（使用数组）
 * @param n number
 */
export function format1(n: number): string {
    n = Math.floor(n) // 只考虑整数

    const s = n.toString()
    const arr = s.split('').reverse()
    return arr.reduce((prev, val, index) => {
        if (index % 3 === 0 && index !== 0) {
            return val + ',' + prev
        }
        return val + prev + ''
    }, '')
}

/**
 * 格式化数字为千分位格式
 * @param {number} n - 待格式化的数字
 * @returns {string} - 格式化后的字符串
 */
export function format2(n: number): string {
    // 将小数部分舍去
    n = Math.floor(n)

    let res = ''
    const s = n.toString()
    const len = s.length

    // 从个位数开始遍历，每三个数字插入一个逗号
    for (let i = len - 1; i >= 0; i--) {
        const j = len - i
        if (j % 3 === 0 && j !== len) {
            // j为3的倍数且不是最高位
            res = ',' + s[i] + res
        } else {
            res = s[i] + res
        }
    }

    // 返回格式化后的字符串
    return res
}

// // 功能测试
// const n = 10201004050
// console.info('format1', format1(n))
// console.info('format2', format2(n))
