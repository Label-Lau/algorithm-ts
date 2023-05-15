/**
 * @description Array rotate
 * @author 双越老师
 */

/**
 * 旋转数组 k 步 - 使用 pop 和 unshift
 * @param arr arr
 * @param k k
 * @returns arr
 */
export function rotate1(arr: number[], k: number): number[] {
    const len = arr.length
    if (!len || !k) return arr
    const step = Math.abs(k % len)
    for (let i = 0; i < step; i++) {
        const tail = arr.pop()
        if (tail != null) {
            arr.unshift(tail)
        }
    }
    return arr
}

/**
 * 旋转数组 k 步 - 使用 concat
 * @param arr arr
 * @param k k
 */
export function rotate2(arr: number[], k: number): number[] {
    const len = arr.length
    if (!len || !k) return arr
    const step = Math.abs(k % len)

    const arr1 = arr.slice(0, len - step)
    const arr2 = arr.slice(-step)
    return arr2.concat(arr1)
}

// // 功能测试
// const arr = [1, 2, 3, 4, 5, 6, 7]
// const arr1 = rotate2(arr, 3)
// console.info(arr1)

// // 性能测试
// const arr1 = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr1.push(i)
// }
// console.time('rotate1')
// rotate1(arr1, 9 * 10000)
// console.timeEnd('rotate1') // 885ms O(n^2)

// const arr2 = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr2.push(i)
// }
// console.time('rotate2')
// rotate2(arr2, 9 * 10000)
// console.timeEnd('rotate2') // 1ms O(1)
