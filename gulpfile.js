var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();


// Styles: SCSS to CSS
gulp.task('styles', function() {
  return gulp.src('./app/assets/scss/style.scss')
    .pipe(sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError))
    .pipe(gulp.dest('./app/temp/css'))
});


gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/scss/**/*.scss', function() {
    gulp.start('cssInject');
  });

});

//CSS Inject by Browser
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/css/style.css')
    .pipe(browserSync.stream());
});


gulp.task('default', ['watch']);
