const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const uglifycss = require('gulp-uglifycss');
const rename = require('gulp-rename');

const app = '.',
    build = './src/assets';

const scss = {
    sassOpts: {
        outputStyle: 'compressed', // Only the "expanded" and "compressed" values of outputStyle are supported.
        errLogToConsole: true,
        includePaths: [
            './node_modules/'
        ]
    }
};

function cssTranspile() {
    return src([
            app + '/scss/*.scss',
            '!'+ app +'/scss/_*.scss'
        ])
        .pipe(sourcemaps.init())
        .pipe(
            sass(scss.sassOpts)
            .on('error', sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./', {
            includeContent: false,
            sourceRoot: app + '/scss'
        }))
        .pipe(dest(build + '/css'))
}

function cssMinify() {
    return src([
            app + '/scss/*.scss',
            '!'+ app +'/scss/_*.scss'
        ])
        .pipe(
            sass(scss.sassOpts)
            .on('error', sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(uglifycss())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest(build + '/css'));
}

function watchFunction() {
    watch(app + '/scss/**/*.scss', cssTranspile);
    watch(app + '/scss/**/*.scss', cssMinify);
}

exports.watch = watchFunction;

exports.start = function() {
    cssTranspile();
    cssMinify();
    watchFunction();
}

exports.default = function(cb) {
    cb();
    console.log('Copyright © 2019. Developed by duchv.')
}
