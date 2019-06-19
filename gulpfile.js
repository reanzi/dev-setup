var gulp = require("gulp"),
  watch = require("gulp-watch");

// var print = require("gulp-print");
// var browser = require("browser-sync").create();

// var paths = {
//   styles: {
//     src: "src/styles/**/*.scss",
//     dest: "assets/styles/"
//   },
//   scripts: {
//     src: "src/scripts/**/*.js",
//     dest: "assets/scripts/"
//   }
// };
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

// gulp.task("html", function(done) {
//   console.log("it works using callbacks");
//   done();
// });

// gulp.task("watch", function() {
//   watch("./index.html", function(done) {
//     gulp.start("html");
//     done();
//   });
// });

// gulp.task("watch", function() {
//   return new Promise(function(resolve, reject) {
//     watch("./index.html", function(done) {
//       gulp.start("html");
//       done();
//     });
//     resolve();
//   });
// });

// gulp
// .watch(cssFiles, gulp.parallel("stylesheets"))
// .on("change", browser.reload);

// gulp.task("watch", function() {
//   gulp.watch("./index.html", gulp.parallel("html"));
// });
// // .on("change", "done")

// gulp.task("three", three);

// function three(done) {
//   done();
// }
// three.description = "This is the description of task three";

// gulp.task("four", gulp.series("one", "two"));

// gulp.task(
//   "five",
//   gulp.series(
//     "four",
//     gulp.parallel("three", function(done) {
//       // do more stuff
//       done();
//     })
//   )
// );

gulp.task("one", function(done) {
  console.log("One Done");
  done();
});

gulp.task("two", function(done) {
  console.log("Two Done");
  done();
});
gulp.task("watch", function() {
  return new Promise(function(resolve, reject) {
    watch(
      "./index.html",
      gulp.series(
        "html",
        gulp.parallel("four", function(done) {
          console.log(" from parallel Four was Called");
          done();
        })
      )
    );
    resolve();
  });
});

gulp.task("html", function(done) {
  // console.log("html called");
  done();
});

gulp.task("four", gulp.series("one", "two"), function(done) {
  //   console.log(" from parallel Four was Called");
  done();
});
