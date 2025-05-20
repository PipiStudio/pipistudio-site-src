import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  build: {
    // 设置 rollupOptions.input 来定义多个入口
    rollupOptions: {
      input: {
        index: '/index.html',
        home: '/src/pages/home.html',
        projects: '/src/pages/projects.html',
      },
    },
  },
});