export function sortedSquares(nums: number[]): number[] {
    const result: number[] = []
    let k = nums.length - 1
    for (let i = 0, j = nums.length - 1; i <= j; ) {
        if (nums[i] ** 2 > nums[j] ** 2) {
            result[k--] = nums[i++] ** 2
        } else {
            result[k--] = nums[j--] ** 2
        }
    }
    return result
}
