let gulp = require('gulp')
let sass = require('gulp-sass')
let plumber = require('gulp-plumber')
let autoprefixer = require('gulp-autoprefixer')
let browserSync = require('browser-sync').create()

gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: './src',
        }
    })
})

gulp.task('sass', () => { // create a gulp task called sass
    return gulp.src('./src/sass/**/*.scss')  // tells gulp what files are needed
        .pipe(plumber())
        .pipe(sass()) // sends the files through gulp sass
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./src')) // destination of files
        .pipe(browserSync.reload({
            stream: true
        }))
})

// Gulp watch syntax
// gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 

gulp.task('watch', ['browserSync'], () => {
    gulp.watch('./src/sass/**/*.scss', ['sass'])
    gulp.watch('./src/*.html', browserSync.reload); 
    gulp.watch('./src/scripts/**/*.js', browserSync.reload); 
})