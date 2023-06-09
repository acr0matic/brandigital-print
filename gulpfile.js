process.env.NODE_ENV = 'default' // default или wordpress

const path = {
  main: {
    src: './src/',
    dist: './dist/',
  },

  html: {
    src: './src/**/*.html',
    dest: './dist/',

    layout: {
      src: './src/layout/**/*.html',
      dest: './dist/',
    },

    include: {
      src: './src/layout/*.html',
      compiled: './src/',
    },
  },

  style: {
    src: './src/assets/scss/**/*.{scss,sass}',
    dest: './dist/',
    compiled: './src/css/',

    core: {
      src: "./src/assets/scss/core/**/main.{scss,sass}",
      compiled: "./src/assets/scss/core/",
    },

    fileName: {
      default: 'style.css',
      minified: 'style.min.css',
    }
  },

  script: {
    src: './src/assets/scripts/**/*.js',
    dest: './dist/assets/js/',
    fileName: {
      default: 'script.js',
      minified: 'script.min.js',
    }
  },

  php: {
    src: './src/php/**/*.php',
    dest: './dist/php/',
  },

  image: {
    src: './src/assets/img/**/*.{jpg,jpeg,png,gif,tiff,svg}',
    dest: './dist/assets/img',
  },

  favicon: {
    src: './src/assets/misc/favicons/favicon.png',
    dest: './dist/assets/img/favicons',
  },

  font: {
    src: "./src/assets/fonts/**/*.*",
    dest: "./dist/assets/fonts/",
  },

  file: {
    src: "./src/assets/files/**/*.*",
    dest: "./dist/assets/files/",
  }
}

const { task, series } = require('gulp');
const requireDir = require('require-dir');

module.exports = path;

requireDir('./gulp_tasks/');

task('build', series('clean', series(
  [
    'include',
    'compile_core',
    'styles',
    'scripts',
    'images',
    'favicons',
    'fonts',
    'files',
    'layout',
  ],
)));