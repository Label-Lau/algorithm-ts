/**
 * @description 连续字符
 * @author 双越老师
 */

interface IRes {
    char: string
    length: number
}

/**
 * 求连续最多的字符和次数（嵌套循环）
 * @param {string} str - 输入字符串
 * @returns {IRes} - 包含出现最多的字符和其长度的结果对象
 */
export function findContinuousChar1(str: string): IRes {
    // 初始化结果对象
    const res: IRes = {
        char: '',
        length: 0
    }

    // 特判空字符串
    const len = str.length
    if (!len) return res

    let tempLength = 0 // 记录当前连续字符的长度

    // 外层循环，O(n)
    for (let i = 0; i < len; i++) {
        tempLength = 0 // 重置当前连续字符的长度

        // 内层循环，O(n)
        for (let j = i; j < len; j++) {
            if (str[i] === str[j]) {
                tempLength++
            }

            if (str[i] !== str[j] || j === len - 1) {
                // 如果找到新的最大长度，更新结果
                if (tempLength > res.length) {
                    res.length = tempLength
                    res.char = str[i]
                }

                // 如果不是最后一个元素，跳过中间的部分
                if (j < len - 1) {
                    i = j - 1
                }

                break // 跳出内层循环
            }
        }
    }

    // 返回结果
    return res
}

/**
 * 求连续最多的字符和次数（双指针）
 * @param {string} str - 输入字符串
 * @returns {IRes} - 包含出现最多的字符和其长度的结果对象
 */
export function findContinuousChar2(str: string): IRes {
    const res: IRes = {
        char: '',
        length: 0
    }

    const len = str.length
    // 特判空字符串
    if (!len) return res
    // 判断只有单个字符
    if (len === 1) {
        res.char = str[0]
        res.length = 1
        return res
    }

    let tempLength = 0
    let j = 0

    // O(n)
    for (let i = 0; i < len; i++) {
        if (str[i] !== str[j]) {
            if (tempLength > res.length) {
                res.length = tempLength
                res.char = str[j]
            }
            tempLength = 0
            j = i // reset j
        }
        tempLength++
    }
    return res
}

/**
 * 求连续最多的字符和次数（单指针）
 * @param {string} str - 输入字符串
 * @returns {IRes} - 包含出现最多的字符和其长度的结果对象
 */
export function findContinuousChar3(str: string): IRes {
    // 初始化结果对象
    const res: IRes = {
        char: '',
        length: 0
    }

    // 特判空字符串
    const len = str.length
    if (!len) return res
    // 判断只有单个字符
    if (len === 1) {
        res.char = str[0]
        res.length = 1
        return res
    }
    let tempLength = 1

    for (let i = 1; i < len; i++) {
        if (str[i] === str[i - 1]) {
            tempLength++
        } else {
            if (tempLength > res.length) {
                res.char = str[i - 1]
                res.length = tempLength
            }
            tempLength = 1
        }
    }
    // 返回结果
    return res
}

// // // 功能测试
// const str = 'abcd'
// debugger
// console.info(findContinuousChar3(str))

let str = ''
for (let i = 0; i < 100 * 10000; i++) {
    str += i.toString()
}

// 性能测试

console.time('findContinuousChar1')
findContinuousChar1(str)
console.timeEnd('findContinuousChar1') // 50ms

console.time('findContinuousChar2')
findContinuousChar2(str)
console.timeEnd('findContinuousChar2') // 40ms

console.time('findContinuousChar3')
findContinuousChar3(str)
console.timeEnd('findContinuousChar3') // 39ms
