/**
 * @description 数组深度扁平化
 * @author 双越老师
 */

/**
 * 数组深度扁平化，使用 push
 * @param arr arr
 */
export function flattenDeep1(arr: any[]): any[] {
    const res: any[] = []
    for (const item of arr) {
        if (Array.isArray(item)) {
            res.push(...flattenDeep1(item))
        } else {
            res.push(item)
        }
    }
    return res
}

/**
 * 数组深度扁平化，使用 concat
 * @param arr arr
 */
export function flattenDeep2(arr: any[]): any[] {
    let res: any[] = []
    for (const item of arr) {
        if (Array.isArray(item)) {
            res = res.concat(flattenDeep2(item))
        } else {
            res = res.concat(item)
        }
    }
    return res
}

// // 功能测试
// const arr = [1, [2, [3, ['a', [true], 'b'], 4], 5], 6]
// console.info( flattenDeep2(arr) )
