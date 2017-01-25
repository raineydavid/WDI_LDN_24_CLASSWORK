const gulp = require('gulp');
const print = require('gulp-print');
const postcss = require('gulp-postcss');   // doesn't know by default how to handle imports
const nested = require('postcss-nested');
const atImport = require('postcss-import');
const cssnext = require('cssnext');
//arrow function binds parent version of this, that is the only time you'd write the below as function something(){}
const something = () =>{
  console.log('Log task Something');
};

//List all tasks gulp -T
gulp.task('something', something);

gulp.task('css', () => {
  //src/** means any level recursively
  // src/* only one level down
  //  return gulp.src('src/**/*.css')
  return gulp.src('src/css/style.css')
  .pipe(print())
  .pipe(postcss([
    //atImport package tells postcss the order to do the imports
    atImport,
    cssnext({browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']}),// more advanced - targeting specific browsers etc - see cssnext.io
    nested
  ]))//requires an array
  .pipe(gulp.dest('public/css')); //make sure its a different destination
});

gulp.task('watch' , () => {
  // [] an array of tasks
  gulp.watch('src/**/*.css', ['css']);
});

//gulp looks for a default task
gulp.task('default', ['css', 'watch']);
