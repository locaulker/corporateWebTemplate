var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
imageminPngquant = require('imagemin-pngquant'),
imageminJpegRecompress = require('imagemin-jpeg-recompress'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano');
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();


gulp.task('previewDist', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "dist"
    }
  });

});


gulp.task('deleteDistFolder', function() {
  return del("./dist");
});


//Move Bootstrap Fonts
gulp.task('moveFonts', ['deleteDistFolder'], function() {
  var bootstrapFonts = './node_modules/bootstrap/dist/fonts/*.{eot,svg,ttf,woff,woff2}';

  gulp.src(bootstrapFonts)
    .pipe(gulp.dest('app/dist/fonts'));
});


// Optimize Images
gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  var imgArgs = [
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({plugins: [{removeViewBox: true}]}),
    imageminPngquant(),
    imageminJpegRecompress()
  ];

  return gulp.src('./app/assets/images/**/*.{png,jpeg,jpg,svg,gif}')
    .pipe(imagemin(imgArgs))
    .pipe(gulp.dest('/assets/images'));
});


gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest('dist'));
});


// Run build task
gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'moveFonts', 'usemin']);
