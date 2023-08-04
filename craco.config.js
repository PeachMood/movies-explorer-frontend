const path = require('path');

const resolvePath = (file) => path.resolve(__dirname, file);

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@context': resolvePath('./src/context'),
      '@hooks': resolvePath('./src/hooks'),
      '@assets': resolvePath('./src/assets'),
      '@pages': resolvePath('./src/pages'),
      '@routes': resolvePath('./src/routes'),
      '@utils': resolvePath('./src/utils'),
    },
  },
};
