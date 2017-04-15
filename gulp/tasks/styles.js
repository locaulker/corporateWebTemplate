'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    // postcss = require('gulp-postcss'),
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

// =============================================== //
// // Styles: SCSS to CSS
// gulp.task('styles', function() {
//   var bootstrapCSS = gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css');
//
//   // For Development change outputStyle to expanded if necessary
//   var args = {outputStyle: 'expanded', precision: 2}
//   // var args2 = [autoprefixer({browsers: ['last 2 versions']})];
//
//   // Change return gulp.src('./app/assets/scss/style.scss') like below
//   var scssFiles = gulp.src('./app/assets/scss/style.scss')
//     .pipe(plumber(function(err) {
//       console.log('Styles Task Error');
//       console.log(err);
//       this.emit('end');
//     }))
//     .pipe(sourcemaps.init())
//     .pipe(sass(args))
//     // .pipe(postcss(args2))
//
//   return merge(scssFiles, bootstrapCSS)
//     .pipe(concat('style.css'))
//     .pipe(sourcemaps.write('../../../maps'))
//     .pipe(gulp.dest('./app/temp/css'))
// });
