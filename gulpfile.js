const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const { src, series, parallel, dest, watch } = require('gulp');

function imgTask() {
  return src('public/img/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
}

function jsTask() {
  return src('src/*')
    .pipe(concat('all.js'))
    .pipe(terser(''))
    .pipe(dest('dist//js'));
}

function cssTask() {
  return src('src/*')
    .pipe(concat('style.css'))
    .pipe(postcss([autoprefixer(), cssnano()])) 
    .pipe(dest('dist//css'));
}

function watchTask() {
  watch(scr('src/*'), { interval: 1000 }, parallel('src/*'));
}

exports.cssTask = cssTask;
exports.jsTask = jsTask;
exports.imgTask = imgTask;
exports.default = series(
  parallel(imgTask, jsTask, cssTask),
  watchTask
);