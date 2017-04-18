'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    // cssnano = require('gulp-cssnano'),
    // rename = require('gulp-rename'),
    concat = require('gulp-concat');



function errorHandler(err) {
  console.log(err.toString);
  this.emit('end');
}

// Styles: SCSS to CSS
gulp.task('styles', function() {

  return gulp.src('./app/assets/scss/styles.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      precision: 2,
      includePaths: ['app/bower_components']
    }))
    .pipe(autoprefixer())
    .pipe(concat('styles.css'))
    // .pipe(cssnano('styles.css'))
    // .pipe(rename('styles.min.css'))
    .pipe(sourcemaps.write('../../../maps'))
    .pipe(gulp.dest('./app/public/css'))
});
