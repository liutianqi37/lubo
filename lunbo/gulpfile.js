var gulp = require('gulp');
var server = require('gulp-webserver');
var url = require('url');
var fs = require('fs');
var path = require('path');
var list = require('./mock/data.json');

gulp.task('server', function () {
    gulp.src('src')
        .pipe(server({
            port: 9090,
            open: true,
            middleware: function (req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return false;
                }
                if (pathname === '/api/list') {
                    res.end(JSON.stringify({code: 0, data: list}));
                } else {
                    pathname = pathname === '/' ? '/index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }));
});