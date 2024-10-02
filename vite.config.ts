import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  
  return {
    plugins: [react()],
    build: {
      minify: isProduction,
      sourcemap: !isProduction,
    },
    css: {
      devSourcemap: !isProduction,
    }
  }
})