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
            const tail = this.stack1.pop()
            if (tail != null) {
                this.stack2.push(tail)
            }
        }
        const res = this.stack2.pop() || null
        while (this.stack2.length) {
            const tail = this.stack2.pop()
            if (tail != null) {
                this.stack1.push(tail)
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
