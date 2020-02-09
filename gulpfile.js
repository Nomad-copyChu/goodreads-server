var gulp = require("gulp");
var ts = require("gulp-typescript");
gulp.task("babel", function() {
  //gulp babel 입력시 실행
  var tsconfig = require("./tsconfig.json");

  return gulp
    .src("src/**/*.ts")
    .pipe(ts(tsconfig.compilerOptions))
    .pipe(gulp.dest("build")); //build에 저장
});
