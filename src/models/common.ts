type ICode = 200 | 400 | 403

export interface IBase {
    code: ICode
    message: string
}
