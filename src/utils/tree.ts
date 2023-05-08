interface IProp {
    key: string
    title: string
    children: string
}

export default class Tree {
    prop: IProp
    constructor(prop = { key: 'key', title: 'title', children: 'children' }) {
        this.prop = prop
    }

    listToTree(list: any[], { id = 'id', parentId = 'parent_id', name = 'name' } = {}) {
        const { prop: { key, title, children } } = this

        const keyMap = list.reduce((obj, node) => {
            obj[node[id]] = node
            node[key] = node[id]
            node[title] = node[name]
            node[children] = []
            return obj
        }, {})

        return list.filter((node) => {
            if (keyMap[node[parentId]])
                keyMap[node[parentId]][children].push(node)

            return !node.parentId
        })
    }

    treeToList(tree: any[], list: any[] = [], level = 0) {
        const { prop: { children } } = this

        tree.forEach((node) => {
            list.push(node)
            node.level = level + 1
            if (node[children])
                this.treeToList(node[children], list, level + 1)
        })
        return list
    }

    traversal(nodes: any[], func: Function) {
        const { prop: { children } } = this

        nodes.forEach((node) => {
            func(node)
            if (node[children])
                this.traversal(node[children], func)
        })
    }

    findNode(tree: any[], func: Function) {
        const { prop: { children } } = this

        for (const node of tree) {
            if (func(node))
                return node
            if (node[children]) {
                const res = this.findNode(node[children], func) as any
                if (res)
                    return res
            }
        }
        return null
    }

    findPath(tree: any[], func: Function, path: any[] = [], result: any[] = []) {
        const { prop: { key, children } } = this

        for (const node of tree) {
            path.push(node[key])
            func(node) && result.push([...path])
            if (node[children])
                this.findPath(node[children], func, path, result)

            path.pop()
        }
        return result
    }
}
