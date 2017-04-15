var gulp = require('gulp'),
   watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


// Watching Tasks
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

  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });

}); // End watch task


// Watching changes in Styles
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/css/style.css')
    .pipe(browserSync.stream());
});

// Watching changes in Scripts
gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});


// Default Task Call - just 'gulp'
// gulp.task('default', ['clean', 'images', 'moveFonts', 'styles', 'scripts', 'watch']);

gulp.task('default', ['images', 'styles', 'scripts', 'watch']);
