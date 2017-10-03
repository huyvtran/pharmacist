var gulp = require('gulp');


gulp.task('copyimages', function(){
    return gulp.src(['src/assets/img/**/*']).pipe(gulp.dest('www/assets/img'));
});
