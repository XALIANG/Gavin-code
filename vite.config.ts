import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import { createHtmlPlugin } from "vite-plugin-html";
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/variable.scss";`
        }
      }
    },
    server: {
      // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
      host: "0.0.0.0",
      port: 8888,
      open: false,
      cors: true,
      proxy: {
        // "/api": {
        //   target: "", 
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/api/, "")
        // }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: 'is vite App'
          }
        }
      }),
      eslintPlugin(),
      VueSetupExtend(),
    ],
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
      //@rollup/plugin-commonjs 插件的选项z   
      commonjsOptions: {
      },
    }
  }

})
