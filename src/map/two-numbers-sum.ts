/**
 * @description 两数之和
 * @author 双越老师
 */

/**
 * Find two numbers in an array that add up to a given number
 * @param {number[]} arr - The array to search for two numbers
 * @param {number} n - The target sum of two numbers
 * @returns {number[]} - An array of two numbers that add up to the target sum, or an empty array if not found
 */
export function findTowNumbers(arr: number[], n: number): number[] {
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
        const target = n - num
        if (map.has(target)) {
            return [arr[map.get(target)], arr[i]]
        } else {
            map.set(num, i)
        }
    }
    return []
}
