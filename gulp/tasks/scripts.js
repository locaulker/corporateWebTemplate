var gulp = require('gulp'),
    // uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    // rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps');


// Scripts tasks
gulp.task('scripts', function() {
  console.log('Starting scripts task');

  return gulp.src('./app/assets/scripts/**/*.js')
    .pipe(plumber(function(err) {
      console.log('Scripts Task Error');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    // .pipe(rename('scripts.min.js'))
    // .pipe(uglify())
    .pipe(sourcemaps.write('../../../maps'))
    .pipe(gulp.dest('./app/public/scripts'))
});
