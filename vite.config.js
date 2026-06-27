import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Site de usuário (henrimafra.github.io) → servido na raiz do domínio.
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
})
