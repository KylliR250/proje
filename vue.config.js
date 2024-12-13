const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
  },
  devServer: {
    port: 3000, // Frontend development server port
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Backend server
        changeOrigin: true,
      },
    },
  },
};
