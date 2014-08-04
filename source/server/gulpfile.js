<<<<<<< HEAD
﻿var gulp = require('gulp');
var less = require('gulp-less');
var nodemon = require('gulp-nodemon');

var paths = {
    serverViews: ['app/views/**/*.*'], 
    serverJS: ['gruntfile.js', 'server.js', 'config/**/*.js', 'app/**/*.js'],
    clientViews: ['public/modules/**/views/*.html'],
    clientJS: ['public/js/*.js', 'public/modules/**/*.js'],
    clientCSS: ['public/modules/**/*.css']
};

gulp.task('go', function () {
    nodemon({
        script: 'server.js',
        options: {
            nodeArgs: ['--debug'],
            ext: 'js,html',
            //watch: watchFiles.serverViews.concat(watchFiles.serverJS)
        }
    })
    .on('restart', function () {
        console.log('restarted.');
    });
});

gulp.task('watch', function () {
    
});

gulp.task('default', ['watch', 'go']);
=======
var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	bower = require('gulp-bower-files');

gulp.task('bower-files', function(){
	return bower().pipe(gulp.dest("public/public/js"));
});

gulp.task('lint', function(){
	return gulp.src('public/public/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});



gulp.task('default', ['lint', 'bower-files']);
>>>>>>> fa437f1ef4c7ee39ce51ac457f21905bbada230a
