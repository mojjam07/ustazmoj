import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Forward API calls from the React app to the Node/Express server.
      // Assumes zatsu runs on http://localhost:4000
      '/api': 'http://localhost:4000',
    },
  },
})

