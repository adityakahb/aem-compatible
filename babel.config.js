module.exports = {
  presets: [
    [
      "@babel/preset-env", {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
      }
    ]
  ],
  plugins: [
    'istanbul',
    [
      '@babel/plugin-transform-runtime', {
        helpers: true,
        regenerator: true,
        useESModules: false
      }
    ]
  ]
}