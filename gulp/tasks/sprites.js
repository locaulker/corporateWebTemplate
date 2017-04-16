var gulp = require('gulp'),
spritesmith = require('gulp.spritesmith'),
gulpIf = require('gulp-If');



gulp.task('sprites', function() {
  gulp.src('./app/assets/images/project/**/*')
    .pipe(spritesmith({
      cssName: '_sprits.scss',
      imgName: 'sprites.png',
      imgPath: '../images/sprits.png',
      retinaSrcFilter: ['../../app/assets/images/sprites/*@2x.png'],
      // retinaImgName: 'sprites@2x.png',
      cssName: '_sprits2.scss',
      retinaImgName: 'sprites@2x.png',
      retinaImgPath: '../images/sprites@2x.png'
    }))
    .pipe(gulpIf('*.png', gulp.dest('./app/assets/images')))
    .pipe(gulpIf('*.scss', gulp.dest('./app/assets/scss')))
});


// gulp.task('project', function() {
//   gulp.src('./app/assets/images/project/**/*')
//     .pipe(spritesmith({
//       cssName: '_project.scss',
//       imgName: 'project.png',
//       imgPath: '../images/project.png'
//     }))
//     .pipe(gulpIf('*.png', gulp.dest('./app/assets/project')))
//     .pipe(gulpIf('*.scss', gulp.dest('./app/assets/scss')));
// });

// {
//   // This will filter out `fork@2x.png`, `github@2x.png`, ... for our retina spritesheet
//   //   The normal spritesheet will now receive `fork.png`, `github.png`, ...
//   retinaSrcFilter: ['images/*@2x.png'],
//   imgName: 'sprite.png',
//   retinaImgName: 'sprite@2x.png',
//   cssName: 'sprite.styl'
// }
