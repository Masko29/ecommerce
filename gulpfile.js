var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('sass', function () {
   return gulp.src("app/sass/**/*.scss")
       .pipe(sass())
       .pipe(gulp.dest('app/css'))
       .pipe(browserSync.reload({stream:true}))
});

gulp.task('script', function () {
   return gulp.src([
       'app/libs/**/dist/*.js'
   ])
       .pipe(concat('libs.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['sass'], function () {
    return gulp.src('app/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function () {
   browserSync({
       server: {
          baseDir: 'app'
       }
   });
});

gulp.task('watch', ['browser-sync', 'css-libs', 'script'], function () {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});