var gulp = require('gulp');
var server = require('gulp-webserver');
var fs = require('fs');
var path = require('path');
var url = require('url');
var data = require('./mock/data.json');

gulp.task('server', function () {
    return gulp.src('src')
        .pipe(server({
            port: 3030,
            open: true,
            middleware:function (req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return false;
                }
                if (pathname === '/api/list') {
                     res.end(JSON.stringify({code: 0, data: data}));
                } else {
                    pathname = pathname === '/' ? '/index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                 }
            }
        }));
});