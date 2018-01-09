'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    babelify = require('babelify'),
    watchify = require('watchify'),
    serve = require('gulp-serve'),
    cors = require('cors');

// set up the browserify instance on a task basis
var b = watchify(browserify({
  entries: './src/index.js',
  debug: true,
  // defining transforms here will avoid crashing your stream
  transform: [babelify]
}));

gulp.task('js', bundle);
b.on('update', bundle);
b.on('log', gutil.log);

function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
};


gulp.task('serve', serve({
    root: ['dist'],
    port: 4443,
    https: true
}));

gulp.task('default', ['js', 'serve']);
