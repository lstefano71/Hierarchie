var gulp = require('gulp'),
  // webserver = require('gulp-webserver');
  webserver = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});
 
 
gulp.task('default', ['webserver']);