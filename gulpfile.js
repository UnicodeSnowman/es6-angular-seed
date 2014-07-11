var gulp = require('gulp');
var traceur = require('gulp-traceur');
var es6ify = require('es6ify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// great resource for setting this shit up
// https://gist.github.com/aslansky/9728460

//gulp.task('default', function () {
//    return gulp.src('./src/main/**/*.js')
//        .pipe(traceur({ sourceMap: true, modules: 'commonjs' }))
//        .pipe(gulp.dest('dist'));
//});

gulp.task('default', function () {
    return browserify('./src/main/app.js')
        .add(es6ify.runtime)
        .transform(es6ify)
        .bundle({ debug: true })
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist'));
});
