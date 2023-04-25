export function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false
  const stack: string[] = []
  const map = new Map()
  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')
  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    if (map.has(letter)) {
      stack.push(letter)
    } else {
      const tail = stack[stack.length - 1]
      if (map.has(tail) && map.get(tail) === letter) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
