const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');

async function build() {
    compileScss();
    moveFile();
}

function compileScss() {
    gulp.src("src/**/*.scss")
        .pipe(sass().on('error', e => console.log(e)))
        // .pipe(sass({outputStyle: 'compressed'}).on('error', e => console.log(e)))
        .pipe(gulp.dest("build"))
}

function moveFile() {
    const imgDest = "build/img";
    gulp.src("src/img/**/*").pipe(gulp.dest(imgDest));

    const dest = "build";
    gulp.src("src/**/*.html").pipe(gulp.dest(dest));
}

function launch() {
    watch(["src/**/*.scss"], () => {
        build();
    })
    .on("change", e => console.log("Scss file changed: " + e))
}

exports.build = build;
exports.launch = launch;
