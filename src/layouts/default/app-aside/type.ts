export interface INode {
    index: string
    title: Function
    icon?: string
    /** 路由跳转 */
    to?: string
    /** 外链跳转 */
    href?: string
    children?: INode[]
}
