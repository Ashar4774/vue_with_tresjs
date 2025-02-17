import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { templateCompilerOptions } from "@tresjs/core";
import { fileURLToPath, URL } from'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue({
        ...templateCompilerOptions
      }),
  ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@': fileURLToPath(new URL("./src", import.meta.url))
        },
    },
})
