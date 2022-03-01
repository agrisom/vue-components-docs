import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: (content: string) => {
          const LF = '\n';
          const paths = [
            '@use \'sass:math\'',
            '@use \'@/styles/components/_uicomponents.sass\'',
          ];
          return paths.join(LF) + LF + content;
        },
      }
    }
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.sass'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
