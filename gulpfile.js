var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var server = require('gulp-express');

// gulp.task('html', function(){
//   return gulp.src('client/templates/*.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('public/html'))
// });

gulp.task('css', function() {
  return gulp.src('src/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'))
});

gulp.task('js', function() {
  return gulp.src(['src/js/*.js'])
    .pipe(gulp.dest('public/js'))
});

gulp.task('server', function() {
  return gulp.src('server.js')
    .pipe(gulp.dest('public/'))
});

gulp.task('server', function() {
  server.run(['server.js']);
});

gulp.task('default', ['css', 'js', 'server']);