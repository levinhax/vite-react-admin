import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgr from 'vite-plugin-svgr'
import { configManualChunk } from './config/vite/optimizer'

import path from 'path'

const resolve = dir => path.resolve(process.cwd(), dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgr()],
  server: {
    // port: 3000,
    // open: true,
    proxy: {
			'/api': 'http://localhost:3001',
      '/api/test': {
        changeOrigin: true,
        target: 'http://10.11.32.173:8080/',
        rewrite: (path) => path.replace(/^\/api\/test/, '')
      }
		}
  },
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
        globalVars: {
        	hack: `true; @import (reference) "${resolve(
        		'src/styles/variable.less'
        	)}";@import (reference) "${resolve('src/styles/mixin.less')}";`
        }
      },
    },
    modules: {
      localsConvention: 'camelCase' // 开启 camelCase 格式变量名转换
    },
  },
  resolve: {
		alias: {
			'@': resolve('src')
		}
	},
  build: {
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      // external: ['react'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        // globals: {
        //   react: 'React'
        // },

        // chunkFileNames: 'assets/chunkjs/[name]-[hash].js',
        // entryFileNames: 'assets/entryjs/[name]-[hash].js',
        // assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',

        manualChunks: configManualChunk, // 手动拆分代码
      },
    },
    // Turning off brotliSize display can slightly reduce packaging time
    brotliSize: false,
    chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位），默认500
  }
})
