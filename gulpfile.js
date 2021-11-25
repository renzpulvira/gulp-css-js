const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("cssnano");
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const concat = require("gulp-concat");
const babel = require("gulp-babel");

function _scssTask() {
  return src("./dev/scss/main.scss", { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([cssnano()]))
    .pipe(dest("./prod/css", { sourcemaps: "." }));
}

function _jsTask() {
  return src("./dev/js/script.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(dest("./prod/js/"));
}

function _watchFiles() {
  watch("dev/scss/*.scss", _scssTask);
  watch("dev/js/*.js", _jsTask);
}

exports.default = series(_scssTask, _jsTask, _watchFiles);
