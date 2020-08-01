const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-dest-clean');

// Files paths
const files = {
    jsFiles: ['js/**/*.js', '!js/vendor/**/*', '!js/script.js'],
    scssFiles: ['scss/**/*.scss', '!scss/style.scss'],
    imgFiles: 'static/img/**/*',
    jsDir: 'js/',
    scssDir: 'scss/',
    cssDir: 'css/',
    jsDist: 'dist/js/',
    cssDist: 'dist/css/',
    imgDist: 'dist/img/'
};

// JS task
gulp.task('js', () =>
    gulp.src(files.jsFiles)
    .pipe(sourcemaps.init())
    .pipe(concat('script.js'))
    .pipe(gulp.dest(files.jsDir))
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(rename({
        extname: '.min.js'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(files.jsDist))
);

// Sass task
gulp.task('sass', () =>
    gulp.src(files.scssFiles)
    .pipe(sourcemaps.init())
    .pipe(concat('style.scss'))
    .pipe(gulp.dest(files.scssDir))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(files.cssDir))
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(files.cssDist))
);

// Img task
gulp.task('img', () =>
    gulp.src(files.imgFiles)
    .pipe(clean(files.imgDist))
    .pipe(imagemin([imagemin
        .mozjpeg({
            quality: 85,
            progressive: true
        })
    ]))
    .pipe(gulp.dest(files.imgDist))
);

// Watch task
gulp.task('default', () =>
    gulp.watch(
        [files.jsFiles[0], files.jsFiles[1], files.jsFiles[2], files.scssFiles[0], files.scssFiles[1], files.imgFiles],
        gulp.parallel(['js', 'sass', 'img'])
    )
);