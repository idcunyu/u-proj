const CracoLessPlugin = require('craco-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

const pathResolve = pathUrl => path.join(__dirname, pathUrl);

const modifyVars = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/style/antd-custom.less'), 'utf8')
);

module.exports = {
  webpack: {
    alias: {
      '@@': pathResolve('.'),
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components'),
      '@pages': pathResolve('src/pages'),
      '@store': pathResolve('src/store'),
      '@utils': pathResolve('src/utils')
    }
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', style: true }],
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: modifyVars,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};