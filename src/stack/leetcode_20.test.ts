/**
 * @description Array rotate test
 * @author labeLyz
 */

import { isValid } from './leetcode_20'

describe('leetcode_20.test', () => {
  it('', () => {
    expect(isValid('')).toBe(true)
    expect(isValid('((()))')).toBe(true)
    expect(isValid('[[)))')).toBe(false)
    expect(isValid('((([[[]]])))')).toBe(true)
  })
})
