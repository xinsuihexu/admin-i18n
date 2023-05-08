import { createApp } from 'vue'
import App from './App.vue'
import init from './init'

const app = createApp(App)

init(app).then(() => {
    app.mount('#app')
})
