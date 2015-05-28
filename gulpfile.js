var gulp = require('gulp'),
  // webserver = require('gulp-webserver');
  webserver = require('gulp-server-livereload');
var server;

gulp.task('webserver', function() {
  server = gulp.src('./')
    .pipe(webserver({
      livereload: {
        enable: true,
        filter: function(filePath, cb) {
          cb( !(/node_modules/.test(filePath)) && !(/.git/.test(filePath)));
        }
      },
      directoryListing: false,
      open: true
    }));
});

gulp.task('killwebserver',function() {
  server.emit('kill');
});

gulp.task('default', ['webserver']);
