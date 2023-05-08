import axios from 'axios'
import { useAccountStore } from '@/store/account'

const instance = axios.create({
    baseURL: '/',
    timeout: 30000,
})

instance.interceptors.request.use((config) => {
    // token可以根据业务做相应的调整
    const userStore = useAccountStore()
    const token = userStore.getToken

    if (token && config.headers)
        config.headers.Authorization = token

    return config
})

instance.interceptors.response.use(({ data }) => {
    // 此处可以根据业务逻辑做相应处理
    if (data.code === 400)
        console.log('出小差啦')

    return data
}, (e) => {
    console.log('fetch>>>>>>', e)

    if (e.response?.status === 403) {
        const accountStore = useAccountStore()
        accountStore.deleteUserInfo()

        window.location = window.location.origin as unknown as Location
    }
    else {
        console.log('出小差啦')
    }
})

export default instance
