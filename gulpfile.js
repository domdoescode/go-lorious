var gulp = require('gulp')
  , watch = require('gulp-watch')
  , shell = require('gulp-shell')
  , gutil = require('gulp-util')

  , spawn = require('child_process').spawn
  , node
  , makeChild

gulp.task('watch', function () {
  make(function () {
    server()
  })

  watch({ glob: '**/*.go', emitOnGlob: false }, function (files) {
    gutil.log('Change detected, rebuilding...')

    make(function () {
      server()
    })
  })
})

gulp.task('test-watch', function () {
  watch({ glob: '**/*.go', emitOnGlob: false }, function (files) {
    gutil.log('Change detected, rebuilding...')

    makeTest(function () {})
  })
})

gulp.task('make-serve', [ 'make', 'server' ])

gulp.task('make', function (callback) {
  make(callback)
})

gulp.task('server', function() {
  server()
})

gulp.task('default', [ 'watch' ])
gulp.task('test', [ 'test-watch' ])

function make(callback) {
  if (makeChild) makeChild.kill()
  makeChild = spawn('make', ['build'], { stdio: 'inherit' })
  makeChild.on('close', function (code) {
    if (code === 0) {
      callback()
    } else {
      gutil.log('Error detected, waiting for changes...')
    }
  })
}

function makeTest(callback) {
  if (makeChild) makeChild.kill()
  makeChild = spawn('make', ['test'], { stdio: 'inherit' })
  makeChild.on('close', function (code) {
    if (code === 0) {
      callback()
    } else {
      gutil.log('Error detected, waiting for changes...')
    }
  })
}

function server() {
  if (node) node.kill()
  node = spawn('./your-project', { stdio: 'inherit' })
  node.on('close', function (code) {
    if (code === 8) {
      gutil.log('Error detected, waiting for changes...')
    }
  })
}