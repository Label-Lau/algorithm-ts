export function isValid(s: string): boolean {
    if (s.length % 2 === 1) return false
    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ])
    const stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            stack.push(s[i])
        } else {
            const tail = stack[stack.length - 1]
            if (map.get(tail) === s[i]) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return !stack.length
}
