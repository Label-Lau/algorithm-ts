/**
 * @description 两个栈 - 一个队列
 * @author 双越老师
 */

export class MyQueue {
    private stack1: number[] = []
    private stack2: number[] = []

    /**
     * 入队
     * @param n n
     */
    add(n: number) {
        this.stack1.push(n)
    }

    /**
     * 出队
     */
    delete(): number | null {
        while (this.stack1.length) {
            const head = this.stack1.shift()
            if (head != null) {
                this.stack2.push(head)
            }
        }
        const res = this.stack2.shift() || null
        while (this.stack2.length) {
            const head = this.stack2.shift()
            if (head != null) {
                this.stack1.push(head)
            }
        }
        return res
    }

    get length(): number {
        return this.stack1.length
    }
}

// // 功能测试
// const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.info(q.length)
// console.info(q.delete())
// console.info(q.length)
// console.info(q.delete())
// console.info(q.length)
