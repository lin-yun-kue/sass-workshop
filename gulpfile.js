const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');

function build() {
    return gulp.src("src/**/*.scss")
        .pipe(sass().on('error', e => console.log(e)))
        // .pipe(sass({outputStyle: 'compressed'}).on('error', e => console.log(e)))
        .pipe(gulp.dest("build"))
}

function launch() {
    watch(["src/**/*.scss"], () => {
        build();
    })
    .on("change", e => console.log("Scss file changed: " + e))
}

exports.build = build;
exports.launch = launch;
