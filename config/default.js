'use strict';

const rollupNode = require('rollup-plugin-node-resolve');
const rollupCommon = require('rollup-plugin-commonjs');

module.exports = {
  // Individual Functions
  rollup: {
    entry: 'js/main.js',
    sourceMap: true,
    preferConst: true,
    plugins: [
      rollupNode(),
      rollupCommon(),
    ],
  },
  babel: {
    presets: [
      'babili',
    ],
    comments: false,
    minified: true,
    compact: true,
  },
  eslint: {},
  sass: {
    outputStyle: 'compressed',
  },
  imagemin: {
    progressive: true,
    svgoPlugins: [
      { removeViewbox: false },
      { removeUselessDefs: false },
      { convertTransform: false },
    ],
  },
  // Compiled Goodness
  folders: {
    server: '.www',
    dist: '.dist',
    css: 'css',
    js: 'js',
    pages: 'pages',
    templates: 'templates',
    images: 'images',
    videos: 'videos',
    audio: 'audio',
    fonts: 'fonts',
    documents: 'docs',
  },
  sourcemaps: {
    enable: true,
    directory: '../maps',
  },
  watch: {
    sass: 'sass/**/*.scss',
    js: 'js/**/*.js',
  },
  tasks: {
    watch: [
      'sass:watch',
      'js:watch',
    ],
    serve: [
      'server',
      'watch',
    ],
  }
};
