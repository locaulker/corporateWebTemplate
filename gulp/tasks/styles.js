'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    merge = require('merge-stream');


// Styles: SCSS to CSS
gulp.task('styles', function() {
  var bootstrapCSS = gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css');

  // For Development change outputStyle to expanded if necessary
  var args = {outputStyle: 'expanded', precision: 2}
  var args2 = [autoprefixer({browsers: ['last 2 versions']})];

  // Change return gulp.src('./app/assets/scss/style.scss') like below
  var scssFiles = gulp.src('./app/assets/scss/style.scss')
    .pipe(plumber(function(err) {
      console.log('Styles Task Error');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(sass(args))
    .pipe(postcss(args2))

  return merge(scssFiles, bootstrapCSS)
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('../../../maps'))
    .pipe(gulp.dest('./app/dist/css'))
});
