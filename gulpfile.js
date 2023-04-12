const gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');


// html Task
gulp.task('html', function () {
    return gulp.src('stage/html/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('dist'))
});

// css Task
gulp.task('css', function() {
    return gulp.src(['stage/css/**/*.css', 'stage/css/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))           // يحمع جميع الملفات في ملف واحد
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
});

// Js Task
gulp.task('js', function() {
    return gulp.src('stage/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

// Watch Task
gulp.task('watch', function() {
                                      // Task Name
    gulp.watch("stage/html/**/*.pug", gulp.series('html'));
    gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], gulp.series('css'));
    gulp.watch("stage/js/*.js", gulp.series('js'));
});