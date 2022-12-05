var gulp = require ('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var browserSync = require('browser-sync').create();


gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .on("error", notify.onError({
            message: "Error: <%= error.message %>",
            title: "SASS Compile Error"
        }))
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', function (){
    gulp.watch('app/sass/**/*.scss', ['sass']);
    // Other watchers
    gulp.watch('app/*.*', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
});


gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }

    })
});

gulp.task('default', ['browserSync', 'sass', 'watch']);