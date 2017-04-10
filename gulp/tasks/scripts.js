var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


// Scripts tasks
gulp.task('scripts', function() {
  console.log('Starting scripts task');

  return gulp.src('./app/assets/scripts/**/*.js')
    .pipe(uglify())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./app/dist/scripts'))

});
