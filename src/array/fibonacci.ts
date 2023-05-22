/**
 * @description 斐波那契数列
 * @author 双越老师
 */

/**
 * 斐波那契数列
 * @param {number} n - 非负整数
 * @returns {number} - 第n个斐波那契数
 */
// function fibonacci(n: number): number {
//     if (n <= 0) return 0
//     if (n === 1) return 1

//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

/**
 * 斐波那契数列
 * @param {number} n - 非负整数
 * @returns {number} - 第n个斐波那契数
 */
export function fibonacci(n: number): number {
    if (n <= 0) return 0
    if (n === 1) return 1
    let prev = 0
    let next = 1
    let res = 0

    for (let i = 2; i <= n; i++) {
        res = prev + next
        prev = next
        next = res
    }
    return res
}

// 功能测试
// console.log(fibonacci(10))
