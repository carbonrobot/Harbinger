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