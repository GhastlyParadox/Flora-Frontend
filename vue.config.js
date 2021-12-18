module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: true,
  devServer: {
    proxy: 'http://localhost:5000',
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://miflora-beta.lsait.lsa.umich.edu'
    : '',
  outputDir: process.env.NODE_ENV === 'production'
    ? '../herbflask/templates'
    : 'dist',
  assetsDir: process.env.NODE_ENV === 'production'
    ? '../static/'
    : '',
};
