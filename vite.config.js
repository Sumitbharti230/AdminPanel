// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),    tailwindcss(),
//   ],
// })
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://161.97.124.77:8088',
        changeOrigin: true,
        secure: false, // set to false to ignore SSL certificate issues if needed
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
