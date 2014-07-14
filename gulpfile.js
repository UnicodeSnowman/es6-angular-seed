var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var traceur = require('gulp-traceur');
var es6ify = require('es6ify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// great resource for setting this shit up
// https://gist.github.com/aslansky/9728460

gulp.task('app', function () {
    return browserify('./src/main/app.js')
        .add(es6ify.runtime) // including runtime doesn't seem to work, need to include manually
        .transform(es6ify)
        .bundle({ debug: true })
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist'));
});


gulp.task('libs', function () {
    gulp.src([
        'bower_components/angular/angular.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js'
    ])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch(['src/main/**/*.js'], ['app']);
});

gulp.task('default', ['libs', 'app']);

//gulp.task('uglifyexample', function () {
//    gulp.src('bower_components/pretty.js')
//        .pipe(uglify())
//        .pipe(gulp.dest('./dist/ugly.min.js'));
//});
