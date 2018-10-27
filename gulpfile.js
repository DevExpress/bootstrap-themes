var themes = ["purple", "office-white"];

var gulp  = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  lazypipe = require('lazypipe'),
  postcss      = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  connect = require('gulp-connect');

var compileTheme = lazypipe()
                   .pipe(sourcemaps.init)
                   .pipe(function () {
                     return sass().on('error', sass.logError);
                   })
                   .pipe(postcss, [ autoprefixer({ browsers: [
                     'Chrome >= 35',
                     'Firefox >= 38',
                     'Edge >= 12',
                     'Explorer >= 10',
                     'iOS >= 8',
                     'Safari >= 8',
                     'Android 2.3',
                     'Android >= 4',
                     'Opera >= 12']})
                    ])
                   .pipe(sourcemaps.write)
                   .pipe(rename, {basename: 'bootstrap'});
var minifyCss = lazypipe()
                .pipe(cleanCss)
                .pipe(rename, {suffix: '.min'});

themes.forEach(theme => {
  gulp.task('compile-' + theme, function() {
    return gulp.src(['dist/' + theme + '/*.scss'])
      .pipe(compileTheme())
      .pipe(gulp.dest('dist/' + theme + '/'))
      .pipe(minifyCss())
      .pipe(gulp.dest('dist/' + theme + '/'))
      .pipe(connect.reload());
  });
});

gulp.task('connect', themes.map(theme => 'compile-' + theme), function() {
  connect.server({
    livereload: true,
    port: 8888
  });
});

gulp.task('html', function() {
  gulp.src('./*.html')
   .pipe(connect.reload());
});

gulp.task('watch-and-compile', function() {
  themes.forEach(theme => {
    gulp.watch(['dist/' + theme + '/*.scss'], ['compile-' + theme]);
  });
  gulp.watch(['./*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch-and-compile'], function() {
});




