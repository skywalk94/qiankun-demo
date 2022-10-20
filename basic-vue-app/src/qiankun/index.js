import { registerMicroApps, start } from 'qiankun'
registerMicroApps([
    {
        name: 'vue-app', // 必须与微应用注册名字相同
        entry: 'http://127.0.0.1:5174', // 入口路径，开发时为微应用所启本地服务，上线时为微应用线上路径
        container: '#vue-app-container', // 微应用挂载的节点
        activeRule: '/micro-vue', // 当访问路由为 /micro-vue 时加载微应用
        props: {
            msg: "我是来自主应用的值-vue"  // 主应用向微应用传递参数
        }
    },
    {
        name: 'react-app',
        entry: 'http://127.0.0.1:5175',
        container: '#react-app-container',
        activeRule: '/micro-react',
        props: {
            msg: "我是来自主应用的值-react"
        }
    }
])
start()