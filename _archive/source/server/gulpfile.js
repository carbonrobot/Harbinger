var gulp = require('gulp');
var less = require('gulp-less');
var nodemon = require('gulp-nodemon');

// TODO: get these paths from the config files
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