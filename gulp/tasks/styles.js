var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps');


// Styles: SCSS to CSS
gulp.task('styles', function() {
  // For Development change outputStyle to expanded if necessary
  var args = {outputStyle: 'compressed'}
  var args2 = [autoprefixer({browsers: ['last 2 versions']})];

  return gulp.src('./app/assets/scss/style.scss')
    .pipe(plumber(function(err) {
      console.log('Styles Task Error');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(sass(args))
    .pipe(postcss(args2))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/dist/css'))
});
