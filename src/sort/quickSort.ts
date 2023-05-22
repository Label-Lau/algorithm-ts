/**
 * 快速排序算法
 * @param {number[]} arr - 待排序的数组
 * @returns {number[]} - 排序后的数组
 */
export function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr
    }
    const left = []
    const right = []
    const pivotValue = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivotValue) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivotValue, ...quickSort(right)]
}
