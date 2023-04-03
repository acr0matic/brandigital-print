const { task, src, dest } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const gulpIgnore = require('gulp-ignore');

const path = require('../gulpfile');

/*
- Компиляция SCSS фрагментов в CSS код
- Генерация sourcemap
*/

task('scss', () => src(path.style.src)
  .pipe(gulpIgnore.exclude('core/**/*.scss'))
  .pipe(sourcemaps.init())
  .pipe(sass.sync())
  .pipe(rename(path.style.fileName.default))
  .pipe(sourcemaps.write('.'))
  .pipe(dest(path.style.compiled))
);
