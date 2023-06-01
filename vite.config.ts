import vue from "@vitejs/plugin-vue";
import { UserConfig, ConfigEnv, loadEnv, defineConfig, isFileServingAllowed } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import path from "path";
const pathUrl = path.resolve(__dirname, "src")
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        "@": pathUrl,
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      },
    },
    css: { 
      preprocessorOptions: {
        //define global scss variable
        scss: {
          javascriptEnabled: true,
          additionalData: `
            @use "@/styles/variables.scss" as *;
          `,
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: Number(env.VITE_APP_PORT),
      open: false, // 运行是否自动打开浏览器
      proxy: {
        // 反向代理解决跨域
        [env.VITE_APP_BASE_API]: {
          target: "http://vapi.youlai.tech", // 线上接口地址
          // target: 'http://localhost:8989',  // 本地接口地址 , 后端工程仓库地址：https://gitee.com/youlaiorg/youlai-boot
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""), // 替换 /dev-api 为 target 接口地址
        },
      },
    },
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.jsx', 'src/**/*.ts'],
        cache:false
      }),
      AutoImport({
        eslintrc: {
          enabled: false, //  Default `false`
          filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        resolvers: [
          ElementPlusResolver(),
        ],
        vueTemplate: true, // 是否在 vue 模板中自动导入
        // dts: path.resolve(pathUrl, "types", "auto-imports.d.ts"), //  自动导入组件类型声明文件位置，默认根目录; false 关闭自动生成
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],

  };
});
