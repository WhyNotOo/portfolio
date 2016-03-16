'use strict';

var gulp        = require('gulp'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    sass        = require('gulp-sass'),
    path        = require('path'),
    htmlmin     = require('gulp-htmlmin'),
    autoprefixer= require('gulp-autoprefixer'),
    babel       = require('gulp-babel'),
    browserSync = require('browser-sync'),
    app         = 'portfolio/',
    script      = '_scripts/',
    sss         = '_sass/',
    js          = 'js/',
    css         = 'css/',
    deploy      = '_site/';


// COMPILE SASS
gulp.task('sass', function() {
    gulp.src(sss+'**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 5 versions', 'ie >= 10'], { cascade: true }))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(css))
});


// COMPILE SCRIPTS
gulp.task('scripts', function() {
    gulp.src(script+'**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(js))
});


// BROWSER SYNC TO RELOAD
gulp.task('browser-sync', function() {
   browserSync.init(null, {
      server: {
         baseDir: './'+deploy
      }
   });
});


// JEKYLL STUFFS
gulp.task('jekyll', ['sass', 'scripts'], function(gulpCallBack) {
    var spawn = require('child_process').spawn;
    var jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'});

    jekyll.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
    });
});

gulp.task('html', ['jekyll'], function() {
    gulp.src([
        path.join(deploy, '*.html'),
        path.join(deploy, '*/*/*.html'),
        path.join(deploy, '*/*/*/*.html')
        ])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(deploy))
        .pipe(browserSync.reload({stream:true, once: true}));
});


// -->
// Default task
// <--
gulp.task('default', ['sass', 'scripts', 'html', 'browser-sync'], function(event) {
    // --> CSS
    gulp.watch(sss+'**/*.scss', ['html']);
    //--> HTML
    gulp.watch(['_includes/*.html', '_layouts/*.html','_posts/*.md'], ['html']);
    // --> JS
    gulp.watch(script+'**/*.js', ['html']);
});