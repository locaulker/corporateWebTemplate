'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps');
    // concat = require('gulp-concat');
    // merge = require('merge-stream');


function errorHandler(err) {
  console.log(err.toString);
  this.emit('end');
}

// Styles: SCSS to CSS
gulp.task('styles', function() {

  return gulp.src('./app/assets/scss/style.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      precision: 2,
      includePaths: ['app/bower_components']
    }))
    .pipe(autoprefixer())
    // .pipe(concat('style.css'))
    .pipe(sourcemaps.write('../../../maps'))
    .pipe(gulp.dest('./app/temp/css'))
});
