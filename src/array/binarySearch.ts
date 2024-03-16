/**
 * description [] => 左闭右闭法
 */
// function binarySearch(nums: Array<number>, target: number) {
//     let left = 0
//     let right = nums.length - 1

//     while (left <= right) {
//         const middle = Math.floor((left + right) / 2)
//         if (nums[middle] > target) {
//             // 更新右边界
//             right = middle - 1
//         } else if (nums[middle] < target) {
//             // 更新左边界
//             left = middle + 1
//         } else {
//             return middle
//         }
//     }
//     return -1
// }

/**
 * description [) => 左闭右开法
 */
export function binarySearch(nums: Array<number>, target: number) {
    let left = 0
    let right = nums.length

    while (left < right) {
        const middle = Math.floor((left + right) / 2)
        if (nums[middle] > target) {
            // 更新右边界
            right = middle
        } else if (nums[middle] < target) {
            // 更新左边界
            left = middle + 1
        } else {
            return middle
        }
    }
    return -1
}
debugger
const result = binarySearch([1, 2, 5], 5)
console.log('🚀 ~ result:', result)
