/**
 * @description 用链表实现队列
 * @author 双越老师
 */

interface IListNode {
    value: number
    next: IListNode | null
}

export class MyQueue {
    private head: IListNode | null = null
    private tail: IListNode | null = null
    private len = 0

    /**
     * 入队，在 tail 位置
     * @param n number
     */
    add(n: number) {
        const newNode: IListNode = {
            value: n,
            next: null
        }
        if (!this.head) {
            this.head = newNode
        }
        if (this.tail) {
            this.tail.next = newNode
        }
        this.tail = newNode
        this.len++
    }

    /**
     * 出队，在 head 位置
     */
    delete(): number | null {
        if (!this.head || this.len <= 0) return null
        const value = this.head.value
        this.head = this.head.next
        this.len--
        return value
    }

    get length(): number {
        // length 要单独存储，不能遍历链表来获取（否则时间复杂度太高 O(n)）
        return this.len
    }
}

// // 功能测试
// const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.info('length1', q.length)
// console.log(q.delete())
// console.info('length2', q.length)
// console.log(q.delete())
// console.info('length3', q.length)
// console.log(q.delete())
// console.info('length4', q.length)
// console.log(q.delete())
// console.info('length5', q.length)

// // 性能测试
// const q1 = new MyQueue()
// console.time('queue with list')
// for (let i = 0; i < 10 * 10000; i++) {
//     q1.add(i)
// }
// for (let i = 0; i < 10 * 10000; i++) {
//     q1.delete()
// }
// console.timeEnd('queue with list') // 17ms

// const q2 = []
// console.time('queue with array')
// for (let i = 0; i < 10 * 10000; i++) {
//     q2.push(i) // 入队
// }
// for (let i = 0; i < 10 * 10000; i++) {
//     q2.shift() // 出队
// }
// console.timeEnd('queue with array') // 431ms
