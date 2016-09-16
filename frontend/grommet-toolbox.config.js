const path = require('path');
const root = path.resolve('src');

export default {
  copyAssets: [
    'src/index.html'
  ],
  jsAssets: ['src/components/**/*.js'],
  mainJs: 'src/index.js',
  devServerHost: '127.0.0.1',
  devServerPort: 9000,
  mainScss: 'src/assets/styles/styles.scss',
  scssAssets: ['src/**/*.scss'],
  scsslint: true,
  webpack: {
    entry: `src/index.js`,
    output: {
      path: `${__dirname}/public`,
      filename: 'bundle.js'
    },
    resolve: {
      root: root,
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.jsx']
    }
  },
  pathToBabelRc: `${__dirname}/.babelrc`
};
