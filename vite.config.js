// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig(({ command, mode }) => ({
//   plugins: [react()],
//   base: command === 'build' || mode === 'production' ? '/tasty-burger-food-delivery-website/' : '/',
// }))

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build'
    ? (process.env.NETLIFY === 'true'
        ? '/'
        : '/tasty-burgers/')
    : '/',
}))