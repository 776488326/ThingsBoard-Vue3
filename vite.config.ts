import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
import PROXY_CONFIG from './proxy.conf'
// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    build: {
      sourcemap: true,
    },
    server: {
      hmr: true,
      proxy: PROXY_CONFIG,
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: true,
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          // @forward规则必须写在最前面，此处导入的路径会在所有的scss文件中被引入，因此必须保证@forward规则的文件在最前边
          additionalData:
            '@import "./src/styles/merge.scss"; @import "./src/styles/variable.scss";',
        },
      },
    },
    resolve: {
      alias: {
        '@': 'src',
      },
      extensions: [
        '.mjs',
        '.js',
        '.mts',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
        '.vue',
      ],
    },
  }
}
