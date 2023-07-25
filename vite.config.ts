import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from '@digitalacorn/vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
import PROXY_CONFIG from './proxy.conf'
import ElementPlus from 'unplugin-element-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
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
        iconDirs: [path.resolve(process.cwd(), './src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[name]',
        replaceStrokeWithCurrentColor: false /*  */,
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: false,
      }),
      ElementPlus({
        defaultLocale: 'zh-cn',
        useSource: true,
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "src/styles/index.scss" as *;`,
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
