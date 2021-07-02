import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // 配置Dep优化行为
  optimizeDeps: {
    // 这个命令专门为解决模块引用的坑而开发
    // 例如我们要在 vite 中使用 lodash，只需要在 vite.config.js （vite 配置文件）中，配置 optimizeDeps 对象，在 include 数组中添加 lodash
    // include: ['lodash'],
    // include: ['react', 'react-dom', 'antd'],
  },
  css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				// globalVars: {
				// 	hack: `true; @import (reference) "${resolve(
				// 		'src/assets/styles/variable.less'
				// 	)}";@import (reference) "${resolve('src/assets/styles/mixin.less')}";`
				// }
			}
		}
	},
})
