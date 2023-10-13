import { defineConfig, loadEnv } from 'vite'
import { getSrcPath, createVitePlugins, wrapperEnv } from '../build'

export default defineConfig(({ command, mode }) => {
  const srcPath = getSrcPath()

  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  const isBuild = command === 'build'

  return {
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      // 设置别名
      alias: {
        '@': srcPath
      }
    },
    build: {
      // target: 'modules',
      cssCodeSplit: false,
      outDir: getSrcPath('es'),
      // minify: true,
      rollupOptions: {
        //忽略打包vue文件
        external: [
          'vue',
          'pinia',
          'vue-router',
          'axios',
          'crypto-js',
          'colord',
          'element-ui',
          'unocss',
          '@vueuse/core',
          '@better-scroll/core',
          '@soybeanjs/vue-admin-tab',
          'dayjs',
          'echarts',
          'element-resize-detector',
          'sortablejs',
          'lodash',
          'vue-pdf-embed',
          'pdfjs-dist',
          'jsoneditor',
          'encryptlong',
          'nprogress',
          'vue-grid-layout'
        ],
        output: [
          {
            format: 'es',
            //不用打包成.es.js,这里我们想把它打包成.js
            entryFileNames: '[name].js',
            //让打包目录和我们目录对应
            // preserveModules: true,
            exports: 'named'
            //配置打包根目录
            // dir: resolve(__dirname, './es'),
          }
        ]
      },
      lib: {
        entry: './src/index.js',
        name: 'blackbox',
        fileName: 'blackbox-ui'
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false // 禁止项目scss添加 @chartset:UFT-8;
        }
      }
    }
  }
})
