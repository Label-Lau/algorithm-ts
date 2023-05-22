/**
 * @description 二分查找
 * @author 双越老师
 */

/**
 * Binary search algorithm
 * @param {number[]} arr - The array to search for the target value
 * @param {number} target - The target value to be searched for
 * @returns {number} - The index of the target value in the array, or -1 if not found
 */
export function binarySearch1(arr: number[], target: number): number {
    const len = arr.length
    if (!len) return -1

    let startIndex = 0
    let endIndex = len - 1

    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2)
        const midValue = arr[midIndex]

        if (midValue > target) {
            endIndex = midIndex - 1
        } else if (midValue < target) {
            startIndex = startIndex + 1
        } else {
            return midIndex
        }
    }
    return -1
}

/**
 * Binary search algorithm
 * @param {number[]} arr - The array to search for the target value
 * @param {number} target - The target value to be searched for
 * @param {number} [startIndex=0] - Optional start index of the array to search
 * @param {number} [endIndex=arr.length-1] - Optional end index of the array to search
 * @returns {number} - The index of the target value in the array, or -1 if not found
 */
export function binarySearch2(
    arr: number[],
    target: number,
    startIndex?: number,
    endIndex?: number
): number {
    const len = arr.length
    if (!len) return -1
    if (startIndex == null) startIndex = 0
    if (endIndex == null) endIndex = len - 1
    if (startIndex > endIndex) return -1
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = arr[midIndex]

    if (target < midValue) {
        return binarySearch2(arr, target, startIndex, midIndex - 1)
    } else if (target > midValue) {
        return binarySearch2(arr, target, midIndex + 1, endIndex)
    } else {
        return midIndex
    }
}

// // // 功能测试
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
// const target = 40
// // console.info(binarySearch2(arr, target))

// // 性能测试
// console.time('binarySearch1')
// for (let i = 0; i < 100 * 10000; i++) {
//     binarySearch1(arr, target)
// }
// console.timeEnd('binarySearch1') // 17ms
// console.time('binarySearch2')
// for (let i = 0; i < 100 * 10000; i++) {
//     binarySearch2(arr, target)
// }
// console.timeEnd('binarySearch2') // 34ms
