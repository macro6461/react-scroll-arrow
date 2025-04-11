import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // or 'src/ReactScrollArrow.ts'
      name: 'ReactScrollArrow',
      fileName: (format) => `react-scroll-arrow.${format}.js`,
    },
    rollupOptions: {
      // Externalize peer dependencies (react, react-dom)
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
