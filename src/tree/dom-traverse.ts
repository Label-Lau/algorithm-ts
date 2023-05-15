/**
 * @description 遍历 DOM tree
 * @author 双越老师
 */

/**
 * 访问节点
 * @param n node
 */
function visitNode(n: Node) {
    if (n instanceof Comment) {
        // 注释
        console.info('Comment node ---', n.textContent)
    }
    if (n instanceof Text) {
        // 文本
        const t = n.textContent?.trim()
        if (t) {
            console.info('Text node ---', t)
        }
    }
    if (n instanceof HTMLElement) {
        // element
        console.info('Element node ---', `<${n.tagName.toLowerCase()}>`)
    }
}

/**
 * 深度优先遍历
 * @param root dom node
 */
function depthFirstTraverse1(root: Node) {
    visitNode(root)
    if (root.childNodes.length) {
        root.childNodes.forEach((child) => {
            depthFirstTraverse1(child)
        })
    }
}

/**
 * 深度优先遍历
 * @param root dom node
 */
function depthFirstTraverse2(root: Node) {
    const s: Node[] = [root]
    while (s.length) {
        const curNode = s.pop()
        curNode && visitNode(curNode)
        if (curNode?.childNodes.length) {
            s.push(...Array.from(curNode.childNodes).reverse())
        }
    }
}

/**
 * 广度优先遍历
 * @param root dom node
 */
function breadthFirstTraverse(root: Node) {
    const q: Node[] = [root]
    while (q.length) {
        const curNode = q.shift()
        curNode && visitNode(curNode)
        if (curNode?.childNodes.length) {
            q.push(...Array.from(curNode.childNodes))
        }
    }
}

const box = document.getElementById('box')
if (box == null) throw new Error('box is null')
depthFirstTraverse2(box)
