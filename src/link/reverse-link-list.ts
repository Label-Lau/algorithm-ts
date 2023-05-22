/**
 * @description 反转单向链表
 * @author lau
 */

export interface ILinkListNode {
    value: number
    next?: ILinkListNode | null
}

/**
 * Creates a linked list from an array of numbers.
 * @param {number[]} arr - The array of numbers to create the linked list from.
 * @returns {ILinkListNode} - The head node of the linked list.
 * @throws {Error} - Throws an error if the input array is empty.
 */
export function createLinkList(arr: number[]): ILinkListNode {
    const len = arr.length
    if (!len) throw new Error('link empty')
    let cur: ILinkListNode = {
        value: arr[len - 1]
    }
    for (let i = len - 2; i >= 0; i--) {
        cur = {
            value: arr[i],
            next: cur
        }
    }
    return cur
}

/**
 * Reverses a linked list.
 * @param {ILinkListNode} listNode - The head node of the linked list.
 * @returns {ILinkListNode} - The head node of the reversed linked list.
 */
export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
    if (!listNode.next) return listNode
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
