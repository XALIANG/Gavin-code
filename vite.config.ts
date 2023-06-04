import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import path from 'path';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const pathSrc = path.resolve(__dirname, './src');
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    }
  },
  css:{},
  server:{},
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      vueTemplate: true, // 是否在 vue 模板中自动导入
      dts: path.resolve(path.resolve(__dirname, './'), "auto-imports.d.ts"), 
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  build: {
    target: "modules",
    outDir: "dist",
    assetsDir: "assets",
    //启用/禁用 CSS 代码拆分
    cssCodeSplit: true,
    //构建后是否生成 source map 文件
    sourcemap: false,
    //自定义底层的 Rollup 打包配置
    rollupOptions: {
    },
    //@rollup/plugin-commonjs 插件的选项
    commonjsOptions: {
    },
  }
})
