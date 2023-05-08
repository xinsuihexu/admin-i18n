import http from '../http'

import type { IUser } from '@/models/account/user'

export function fetchUserInfo(): Promise<IUser> {
    return http.get('/account/user')
}
