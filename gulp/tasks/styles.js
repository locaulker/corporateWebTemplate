var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    plumber = require('gulp-plumber');


// Styles: SCSS to CSS
gulp.task('styles', function() {
  var args = {outputStyle: 'expanded'}
  var args2 = [autoprefixer({browsers: ['last 2 versions']})];


  return gulp.src('./app/assets/scss/style.scss')
    .pipe(plumber(function(err) {
      console.log('Styles Task Error');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sass(args))
    .pipe(postcss(args2))
    .pipe(gulp.dest('./app/dist/css'))
});
