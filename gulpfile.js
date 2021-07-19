const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const change = require('gulp-changed');
const watch = require('gulp-watch');

gulp.task("build-web", () => {
    return gulp.src("src/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("build"))
});

gulp.task("launch-web", () => {
    watch(["src/**/*.scss"])
        .on("change", e => console.log("Scss file changed: " + e))
        .pipe(sass())
        .pipe(gulp.dest("build"))
});