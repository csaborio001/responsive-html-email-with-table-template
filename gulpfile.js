var themename = 'YOUR_THEME_DIRECTORY_NAME';

const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

root = '../../' + themename + '/';

gulp.task('watch', function(done) {
    browserSync.init({
        browser: "google chrome",
        proxy: 'YOUR_DEVELOPMENT_URL_FOR_THE_SITE',
        port:8886
    });
    gulp.watch('*.html').on('change', browserSync.reload);
    // gulp.watch(root + '**/*.css').on('change', browserSync.reload);
    // gulp.watch(root + '**/*.js').on('change', browserSync.reload);
});