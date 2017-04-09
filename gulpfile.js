var gulp = require('gulp'),
    sass = require('gulp-sass');


// Styles: SCSS to CSS
gulp.task('styles', function() {
  return gulp.src('./app/assets/scss/style.scss')
    .pipe(sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError))
    .pipe(gulp.dest('./app/temp/css'))
});

gulp.task('default', ['styles']);
