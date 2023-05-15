/**
 * @description 反转单向链表
 * @author lau
 */

export interface ILinkListNode {
    value: number
    next?: ILinkListNode | null
}

/**
 * 根据数组创建单向链表
 * @param arr number arr
 */
export function createLinkList(arr: number[]): ILinkListNode {
    const len = arr.length
    if (!len) throw new Error('link empty')
    let cur: ILinkListNode = {
        value: arr[len - 1]
    }
    if (len === 1) return cur
    for (let i = len - 2; i >= 0; i--) {
        cur = {
            value: arr[i],
            next: cur
		}
	}
	return cur
}

/**
 * 反转单向链表，并返回反转之后的 head node
 * @param listNode list head node
 */
export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
    if (!listNode.next) return listNode // 不需要反转
    let cur = listNode
    let prev = null

    while (cur) {
        const temp = cur.next
        if (!prev) {
            delete cur.next
        } else {
            cur.next = prev
        }
        prev = cur
        cur = temp as ILinkListNode
    }
    return prev as ILinkListNode
}

const arr = [100, 200, 300]
const list = createLinkList(arr)
console.info('list:', list)

const list1 = reverseLinkList(list)
console.info('list1:', list1)
