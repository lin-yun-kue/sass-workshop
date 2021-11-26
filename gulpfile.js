const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');
const map = require('gulp-sourcemaps');

async function build() {
    compileScss();
    moveFile();
}

function compileScss() {
    gulp.src("src/**/*.scss")
        .pipe(map.init())
        .pipe(sass().on('error', e => console.log(e)))
        // .pipe(sass({outputStyle: 'compressed'}).on('error', e => console.log(e)))
        .pipe(map.write("."))
        .pipe(gulp.dest("build"))
}

function moveFile() {
    const imgDest = "build/img";
    gulp.src("src/img/**/*").pipe(gulp.dest(imgDest));

    const dest = "build";
    gulp.src("src/**/*.html").pipe(gulp.dest(dest));
    gulp.src("src/**/*.css").pipe(gulp.dest(dest));
    gulp.src("src/**/*.js").pipe(gulp.dest(dest));
}

function launch() {
    watch(["src/**/*.scss", "src/**/*.html", "src/img/**/*", "src/**/*.js"], () => {
        build();
    })
    .on("change", e => console.log("Scss file changed: " + e))
}

exports.build = build;
exports.launch = launch;
