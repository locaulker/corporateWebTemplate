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
  return gulp.src('./app/public/css/styles.css')
    .pipe(browserSync.stream());
});

// Watching changes in Scripts
gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});



gulp.task('default', ['styles', 'scripts', 'images','sprites', 'watch']);
// gulp.task('default', ['sprites', 'styles', 'scripts', 'watch']);
