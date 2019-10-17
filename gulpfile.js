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
  gulp.task('compile-' + theme, () =>
    gulp.src('dist/' + theme + '/*.scss')
      .pipe(compileTheme())
      .pipe(gulp.dest('dist/' + theme + '/'))
      .pipe(minifyCss())
      .pipe(gulp.dest('dist/' + theme + '/'))
      .pipe(connect.reload()));
  gulp.task('watch-' + theme, (cb) => {
    gulp.watch('dist/' + theme + '/*.scss', gulp.series('compile-' + theme));
    cb();
  });
});

gulp.task('connect', (cb) => {
  connect.server({
    livereload: true,
    port: 8888
  });
  cb();
});

gulp.task('html', (cb) => {
  gulp.src('./*.html')
   .pipe(connect.reload());
  cb();
});

gulp.task('attachScss', gulp.series(themes.map(theme => "watch-" + theme)));
gulp.task('attachHtml', (cb) => {
  gulp.watch('./*.html', gulp.series('html'));
  cb();
});
gulp.task('default', gulp.series(themes.map(theme => "compile-" + theme))); 
gulp.task('watch', gulp.series('default', 'connect', 'attachHtml', 'attachScss'));


