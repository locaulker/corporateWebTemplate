var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');


// Styles: SCSS to CSS
gulp.task('styles', function() {
  var processors = [
    autoprefixer({browsers: ['last 2 version']})
  ];

  return gulp.src('./app/assets/scss/style.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(postcss(processors))
    // Error Handling
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/css'))
});

// .pipe(sass({
//     outputStyle: 'expanded'
//   }).on('error', sass.logError))
