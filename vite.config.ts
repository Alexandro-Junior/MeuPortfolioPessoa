import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Adicione esta linha:
  base: '/sb1-wmqyfbjb/', 

  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
