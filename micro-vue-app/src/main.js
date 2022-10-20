import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'

import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const initQianKun = () => {
    renderWithQiankun({
        // 当前应用在主应用中的生命周期
        // 文档 https://qiankun.umijs.org/zh/guide/getting-started#

        mount(props) {
            render(props.container)
            //  可以通过props读取主应用的参数：msg
            // 监听主应用传值
            props.onGlobalStateChange((res) => {
                store.count = res.count
                // console.log(res.count)
            })
        },
        bootstrap() { },
        unmount() { },
    })
}

const render = (container) => {
    // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
    const appDom = container ? container : "#app"
    createApp(App).mount(appDom)
}

// 判断当前应用是否在主应用中
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()