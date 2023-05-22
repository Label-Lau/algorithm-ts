/**
 * @description 二叉搜索树
 * @author 双越老师
 */

export interface ITreeNode {
    value: number
    left: ITreeNode | null
    right: ITreeNode | null
}

const arr: number[] = []

/**
 * 前序遍历函数
 * @param {ITreeNode} node - 当前节点
 * @returns {void}
 */
function preOrderTraverse(node: ITreeNode | null) {
    if (node == null) return
    // console.log(node.value)
    arr.push(node.value)
    preOrderTraverse(node.left)
    preOrderTraverse(node.right)
}

/**
 * 中序遍历函数
 * @param {ITreeNode} node - 当前节点
 * @returns {void}
 */
function inOrderTraverse(node: ITreeNode | null) {
    if (node == null) return
    inOrderTraverse(node.left)
    // console.log(node.value)
    arr.push(node.value)
    inOrderTraverse(node.right)
}

/**
 * 后序遍历函数
 * @param {ITreeNode} node - 当前节点
 * @returns {void}
 */
function postOrderTraverse(node: ITreeNode | null) {
    if (node == null) return
    postOrderTraverse(node.left)
    postOrderTraverse(node.right)
    // console.log(node.value)
    arr.push(node.value)
}

/**
 * 获取BST第k小的值
 * @param {ITreeNode} node - BST根节点
 * @param {number} k - 第k小
 * @returns {number} - BST中的第k小值
 */
export function getKthValue(node: ITreeNode, k: number): number | null {
    inOrderTraverse(node)
    return arr[k - 1] || null
}

const bst: ITreeNode = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null,
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}

// preOrderTraverse(bst)
// inOrderTraverse(bst)
// postOrderTraverse(bst)

console.log(getKthValue(bst, 3))
