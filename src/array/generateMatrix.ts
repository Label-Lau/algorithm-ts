export function generateMatrix(n: number): number[][] {
    if (n <= 0) return []
    let startX = 0 // 起始位置
    let startY = 0
    let loop = Math.floor(n / 2) // 旋转圈数
    let mid = Math.floor(n / 2) // 中间位置
    let offset = 1
    let count = 1
    let result: Array<Array<number>> = new Array(n)
        .fill(0)
        .map(() => new Array(n).fill(0))

    while (loop--) {
        let row = startX,
            col = startY
        for (; col < n - offset; col++) {
            result[row][col] = count++
        }
        for (; row < n - offset; row++) {
            result[row][col] = count++
        }
        for (; col > startX; col--) {
            result[row][col] = count++
        }
        for (; row > startY; row--) {
            result[row][col] = count++
        }
        startX++
        startY++
        offset++
    }

    if (n % 2 === 1) {
        result[mid][mid] = count
    }

    return result
}
