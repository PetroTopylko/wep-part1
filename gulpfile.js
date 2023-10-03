const {series, src, dest, parallel, watch} = require('gulp');
const sass = require ('gulp-sass')(require('sass'));
const concat = require ("gulp-concat");

const html_task = () => src('app/*.html')
  .pipe(dest('dist'));

const scss_task = () => src('app/sass/*.scss')
  .pipe(concat( 'index.scss'))
  .pipe(sass())
  .pipe(dest('dist/css'));

const watch_task = () => {
  watch('app/*.html', parallel(html_task));
  watch('app/sass/*.scss', parallel(scss_task));
}

exports.default = series(html_task, scss_task, watch_task);
