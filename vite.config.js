import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-x9",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "jsm-0i0",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "jsm-0i0",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "jsm-0i0",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "jsm-0i0",
    project: "iphone16clone"
  })],

  build: {
    sourcemap: true
  }
})