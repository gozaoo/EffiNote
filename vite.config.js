import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    port: 8021,
    proxy: {
      '/api/': {
        target: 'http://localhost:8022/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 不可以省略rewrite
      }
    },
    cors: true
  }
})
