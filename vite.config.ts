import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    // السطر الأهم لعمل الدومين المجاني على جيت هاب
    base: 'https://m6293147-bot.github.io/PUBG-STATION/', 
    
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: false, // لتقليل حجم الملفات وزيادة سرعة التحميل (SEO)
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
