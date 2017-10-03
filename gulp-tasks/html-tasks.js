var gulp = require('gulp');
var htmlmin = require('gulp-html-minifier');
var copy = require('copy');

gulp.task('copycomponents', function(){
    return gulp.src(['src/assets/**/**/*']).pipe(gulp.dest('www/assets'));
});

gulp.task('minifyhtml', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('www'));
});
