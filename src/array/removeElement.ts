/**
 * description 双指针写法
 */
export function removeElement(nums: number[], val: number): number {
    let slowIndex = 0 // 慢指针是获取我们新数组中需要更新的位置啊
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        // 快指针是用来获取新数组中的元素
        if (nums[fastIndex] !== val) {
            nums[slowIndex] = nums[fastIndex]
            slowIndex++
        }
    }
    return slowIndex
}

/**
 * description 暴力解法
 */
// export function removeElement(nums: number[], val: number): number {
//     let len = nums.length
//     for (let i = 0; i < len; i++) {
//         if (nums[i] === val) {
//             // 发现需要移除的元素，就将数组集体向前移动一位
//             for (let j = i + 1; j < len; j++) {
//                 nums[j - 1] = nums[j]
//             }
//             i-- // 因为下标i以后的数值都向前移动了一位，所以i也向前移动一位
//             len-- // 此时数组的大小-1
//         }
//     }
//     return len
// }
