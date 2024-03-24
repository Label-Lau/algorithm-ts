export function minSubArrayLen(target: number, nums: number[]): number {
    let i = 0
    let sum = 0
    let result = Number.MAX_SAFE_INTEGER
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j]
        while (sum >= target) {
            const sub = j - i + 1
            result = Math.min(result, sub)
            sum -= nums[i]
            i++
        }
    }
    return result === Number.MAX_SAFE_INTEGER ? 0 : result
}
