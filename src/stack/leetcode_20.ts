/**
 * 判断一个只包含括号的字符串是否有效。
 * @param {string} s - 要判断的字符串。
 * @returns {boolean} - 如果字符串有效则返回 true，否则返回 false。
 */
export function isValid(s: string): boolean {
    if (s.length % 2 === 1) return false
    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ])
    const stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        const cur = s[i]
        if (map.get(cur)) {
            stack.push(cur)
        } else {
            const tail = stack[stack.length - 1]
            if (map.get(tail) === cur) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return !stack.length
}
