import type { IBase } from '../common'

export interface IAccount {
    id: string
    name: string
    mobile: string
}

export interface IUserInfo {
    account: IAccount
    token: string
}

export interface IUser extends IBase {
    data: IUserInfo
}
