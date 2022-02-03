const { resolve } = require('path')
const path = require('path')
/**
 * @type {import('vite').UserConfig}
 */
const config = {
    // ...import
    publicDir: 'src/assets',
    resolve: {
        alias: {
            '@': path.resolve(__dirname,'./src') 
        }
    },

    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            admin: resolve(__dirname, 'index2.html')
          }
        }
      }
}

export default config