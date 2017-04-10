var gulp = require('gulp'),
   watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


// Watch Tasks
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


});


//CSS Inject by Browser
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/css/style.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});



// Default Task Call - just 'gulp'
gulp.task('default', ['watch']);
