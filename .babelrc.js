
const presets = [
  [
    "@babel/preset-env", {
      targets: {
        browsers: ['ie >= 11']
      },
      modules: false,
      loose: true
    }
  ]
];

const plugins = [];

module.exports = {
  presets,
  plugins
};