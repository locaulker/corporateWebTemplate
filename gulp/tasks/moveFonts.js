var gulp = require('gulp');

var bootstrapFonts = './node_modules/bootstrap/temp/fonts/*.{eot,svg,ttf,woff,woff2}';

//Move Bootstrap Fonts
gulp.task('moveFonts', function() {
  gulp.src(bootstrapFonts)
    .pipe(gulp.dest('./app/temp/fonts'))
});
