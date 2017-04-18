var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat', function(){
    gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['concat'], function(){
    gulp.watch('src/js/**/*.js', ['concat']);
});
