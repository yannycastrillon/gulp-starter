const
  gulp = require("gulp"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  uglifycss = require("gulp-uglifycss"),
  nodemon = require("nodemon"),
  browserSync = require("browser-sync")


// 1) Function to search on public-dev/css directory,
// 2) Concat() all those css files.
// 3) uglifycss() the application.min.css file (minified)
// 4) Save them on the public/css directory
// 5) Stream the file after changes to the clients
gulp.task("minify-css",()=>{
  gulp.src("public-dev/css/*.css")
    .pipe(concat("application.min.css"))
    .pipe(uglifycss())
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.stream())
})

gulp.task("minify-js",()=>{
  gulp.src("public-dev/js/*.js")
    .pipe(concat("application.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("public/js"))
})

// Restart nodemon automaticaly when extensions js html and css change in development.
gulp.task("nodemon",()=>{
  nodemon({
    ext: "js html css",
    env: {'NODE_ENV': 'development'},
    ignore: ['gulpfile.js','application.min.js','application.min.css']
  })
})

// Browser synchronization to test. On port: 7000 will have different browserw clients checking the changes. Will check for changes on all files on the public-dev folder.
gulp.task('browser-sync', ['nodemon'], () => {
  setTimeout(()=>{
    browserSync.init({
      proxy: 'http://localhost:3000',
      files: ['public-dev/**/*.*'],
      port: 7000
    })
  },2000)
})

// Starts the watcher on the directory with files extensions.
gulp.watch("public-dev/css/*.css", ["minify-css"])
gulp.watch("public-dev/js/*.js", ["minify-js"])



gulp.task("default",["minify-js","minify-css","browser-sync"])
