import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'


export default defineConfig({
  plugins: [
    // 在开发模式下需要把react()关掉
    // https://github.com/umijs/qiankun/issues/1257
    // react(),
    qiankun('react-app', { // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true
    })
  ],
  server: {
    host: '127.0.0.1',
    port: '5175',
  }
})
