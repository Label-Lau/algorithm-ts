/**
 * @description 对称数
 * @author 双越老师
 */

/**
 * 查找小于等于 max 的回文数
 * @param {number} max - 最大值
 * @returns {number[]} 回文数数组
 */
export function findPalindromeNumbers1(max: number): number[] {
    const res: number[] = []
    if (max <= 0) return res

    for (let i = 1; i <= max; i++) {
        // 转换为字符串，转换为数组，再反转，比较
        const s = i.toString()
        if (s === s.split('').reverse().join('')) {
            res.push(i)
        }
    }

    return res
}

/**
 * 查找小于等于 max 的回文数
 * @param {number} max - 最大值
 * @returns {number[]} 回文数数组
 */
export function findPalindromeNumbers2(max: number): number[] {
    const res: number[] = []
    if (max <= 0) return res

    for (let i = 1; i <= max; i++) {
        const s = i.toString()
        const length = s.length

        // 字符串头尾比较
        let flag = true
        let startIndex = 0 // 字符串开始
        let endIndex = length - 1 // 字符串结束
        while (startIndex < endIndex) {
            if (s[startIndex] !== s[endIndex]) {
                flag = false
                break
            } else {
                // 继续比较
                startIndex++
                endIndex--
            }
        }

        if (flag) res.push(i)
    }

    return res
}

/**
 * 查找小于等于 max 的回文数
 * @param {number} max - 最大值
 * @returns {number[]} 回文数数组
 */
export function findPalindromeNumbers3(max: number): number[] {
    const res: number[] = []
    if (max <= 0) {
        return res
    }
    for (let i = 1; i <= max; i++) {
        let rev = 0 // 存储翻转数
        let n = i // 当前数

        // 生成翻转数
        while (n > 0) {
            rev = rev * 10 + (n % 10)
            n = Math.floor(n / 10)
        }

        if (i === rev) {
            res.push(i) // 如果当前数等于翻转数，则是回文数，加入数组
        }
    }

    return res
}

// 功能测试
// console.info(findPalindromeNumbers3(200))

// 性能测试
console.time('findPalindromeNumbers1')
findPalindromeNumbers1(100 * 10000)
console.timeEnd('findPalindromeNumbers1') // 408ms

console.time('findPalindromeNumbers2')
findPalindromeNumbers2(100 * 10000)
console.timeEnd('findPalindromeNumbers2') // 53ms

console.time('findPalindromeNumbers3')
findPalindromeNumbers3(100 * 10000)
console.timeEnd('findPalindromeNumbers3') // 42ms
