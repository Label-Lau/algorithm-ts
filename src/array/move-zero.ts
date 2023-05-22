/**
 * @description 移动 0 到数组末尾
 * @author 双越老师
 */

/**
 * 将数组中的 0 移动到末尾，同时保持其他元素的顺序不变
 * @param {number[]} arr - 待操作的数组
 * @returns {void} - 无返回值，直接修改原数组
 */
export function moveZero1(arr: number[]): void {
    const length = arr.length
    if (length === 0) return

    let zeroLength = 0

    // O(n^2)
    for (let i = 0; i < length - zeroLength; i++) {
        if (arr[i] === 0) {
            arr.push(0)
            arr.splice(i, 1) // 本身就有 O(n)
            i-- // 数组截取了一个元素，i 要递减，否则连续 0 就会有错误
            zeroLength++ // 累加 0 的长度
        }
    }
}

/**
 * 将数组中的 0 移动到末尾，同时保持其他元素的顺序不变（双指针）
 * @param {number[]} arr - 待操作的数组
 * @returns {void} - 无返回值，直接修改原数组
 */
export function moveZero2(arr: number[]): void {
    if (!arr.length) return
    let j = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 && j < 0) {
            j = i
        }
        if (arr[i] !== 0 && j >= 0) {
            ;[arr[j], arr[i]] = [arr[i], arr[j]]
            j++
        }
    }
}

// // 功能测试
const arr = [1, 0, 3, 4, 5]
// [1, 3, 0, 4, 0, 0, 11, 0]
moveZero2(arr)
console.log(arr)

// const arr1 = []
// for (let i = 0; i < 20 * 10000; i++) {
//     if (i % 10 === 0) {
//         arr1.push(0)
//     } else {
//         arr1.push(i)
//     }
// }
// console.time('moveZero1')
// moveZero1(arr1)
// console.timeEnd('moveZero1') // 262ms

// const arr2 = []
// for (let i = 0; i < 20 * 10000; i++) {
//     if (i % 10 === 0) {
//         arr2.push(0)
//     } else {
//         arr2.push(i)
//     }
// }
// console.time('moveZero2')
// moveZero2(arr2)
// console.timeEnd('moveZero2') // 3ms
