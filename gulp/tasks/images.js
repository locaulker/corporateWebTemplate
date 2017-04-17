var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
imageminPngquant = require('imagemin-pngquant'),
imageminJpegRecompress = require('imagemin-jpeg-recompress');


gulp.task('images', function() {

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
    .pipe(gulp.dest('./app/public/images'))
});
