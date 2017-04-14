var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
imageminPngquant = require('imagemin-pngquant'),
imageminJpegRecompress = require('imagemin-jpeg-recompress');


gulp.task('images', function() {

  var imgArgs = [
    imagemin.gifsicle(),
    imagemin.jpegtran(),
    imagemin.optipng(),
    imagemin.svgo(),
    imageminPngquant(),
    imageminJpegRecompress()
  ];

  return gulp.src('./app/assets/images/**/*.{png,jpeg,jpg,svg,gif}')
    .pipe(imagemin(imgArgs))
    .pipe(gulp.dest('./app/temp/images'))
});
