var path = require('path')
var gulp = require('gulp')
var clean = require('gulp-clean')
var debug = require('gulp-debug')
var env = require('process').env
var pkg = require('./package.json')
var runSequence = require('run-sequence')
var tar = require('gulp-tar')
var gzip = require('gulp-gzip')

var ROOT_DIR = '.'
var TEMP_DIR = ROOT_DIR + '/temp'
var DEST_DIR = ROOT_DIR + '/dist'

var tasks = {
  clean: function () {
    return gulp.src(TEMP_DIR)
      .pipe(clean({ force: true }))
  },
  copy: function () {
    return gulp.src([
      './*/**/*.*', './.babelrc', './package.json', '!./data/**/*.*', '!./logs/**/*.*', '!./temp/**/*.*', '!./cache/**/*.*'
    ])
    .pipe(gulp.dest(TEMP_DIR))
  },
  pack: function () {
    return gulp.src([TEMP_DIR + '/**/*.*', TEMP_DIR + '/.babelrc'])
      .pipe(tar('dist-' + pkg.version + '.tar'))
      .pipe(gzip()
      .pipe(gulp.dest(TEMP_DIR))
  }
}

Reflect.ownKeys(tasks).forEach(task=>gulp.task(task, tasks[task]))

gulp.task('build', function (cb) {
  runSequence('clean', 'copy', 'pack', cb)
})