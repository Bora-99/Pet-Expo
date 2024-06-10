import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: "localhost", // Change this to a valid IP address if needed
    port: 3000,
    // Optional otherwise your app will start on default port
    proxy: {
      "/animals": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: ( path ) => path.replace( /^\/api/, "" ),
        secure: false,
        ws:false
      },
    },
  },
});
