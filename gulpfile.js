var gulp = require('gulp'),
  // webserver = require('gulp-webserver');
  webserver = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: {
        enable: true,
        filter: function(filePath, cb) {
          cb( !(/node_modules/.test(filePath)) && !(/.git/.test(filePath)));
        }
      },
      directoryListing: true,
      open: true
    }));
});
 
 
gulp.task('default', ['webserver']);