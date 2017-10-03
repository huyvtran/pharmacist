var gulp = require('gulp');

// JS Hint
var jshint = require('gulp-jshint');

gulp.task('jslint', function() {
  return gulp.src('./www/build/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
