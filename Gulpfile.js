var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('styles', function() {
gulp.src('sass/style.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('./'))
});

gulp.task('connect', function() {
connect.server({
root: './',
livereload: true
});
});

gulp.task('html', function () {
gulp.src('./index.html')
.pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./index.html', './sass/*.scss', './sass/**/*.scss'], ['html', 'styles']);
});


gulp.task('default',function() {
gulp.watch('sass/*.scss',['styles']);
});

gulp.task('dev', ['styles', 'connect', 'watch']);
