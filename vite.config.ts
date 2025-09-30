import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    globals: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // Vite vai tentar resolver automaticamente
  },
  build: {
    outDir: 'dist',
    target: 'es2022',
    rollupOptions: {
      input: 'src/main.ts',
    },
  },
})
