var gulp = require("gulp");
// var print = require("gulp-print");

/*
 // returning a promise to fix gulp 4 error
gulp.task("http", function() {
  return new Promise(function(resolve, reject) {
    console.log("HTTP Server Started");
    resolve();
  });
});

// Call the callback function to fix gulp 4 error
gulp.task("http", function(done) {
  console.log("HTTP Server Started");
  done();
});  

*/

gulp.task("html", function(done) {
  console.log("it works using callbacks");
  done();
});
