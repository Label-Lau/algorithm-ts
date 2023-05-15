/**
 * @description 数组扁平化
 * @author Lau
 */

/**
 * 数组扁平化，使用 push
 * @param arr arr
 */
export function flatten1(arr: any[]): any[] {
    const res: any[] = []
    for (const item of arr) {
        if (Array.isArray(item)) {
            res.push(...item)
        } else {
            res.push(item)
        }
    }
    return res
}

/**
 * 数组扁平化，使用 concat
 * @param arr arr
 */
export function flatten2(arr: any[]): any[] {
    let res: any[] = []
    for (const item of arr) {
        res = res.concat(item)
    }
    return res
}

// // 功能测试
// const arr = [1, [2, [3], 4], 5]
// console.info( flatten2(arr) )
