var gulp = require("gulp");

gulp.task("one", function(done) {
  console.log("One Done");
  done();
});

gulp.task("two", function(done) {
  console.log("Two Done");
  done();
});

gulp.task("three", three);

function three(done) {
  console.log(three.description);
  done();
}
three.description = "This is the description of task three";

gulp.task("four", gulp.series("one", "two"));

gulp.task(
  "five",
  gulp.series(
    "four",
    gulp.parallel("three", function(done) {
      // do more stuff
      done();
    })
  )
);
