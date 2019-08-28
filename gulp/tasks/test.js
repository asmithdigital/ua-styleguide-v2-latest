// Generate static test html files to run visual tests against.
"use strict";

// GV is Gulp variables defined in gulpfile.babel.js
module.exports = (GV) => {
    
    GV.TASKS.supercollider
        .config({
           template: GV.PATHS.src + '/templates/test.html'
        });

    return (done) => {
        // Define a gulp src stream and pipe to supercollider
        let stream = GV.gulp.src(GV.PATHS.src + '/pages/static-**.md')
        .pipe(GV.TASKS.supercollider.init())
        .pipe(GV.gulp.dest(GV.PATHS.tests))
        return stream;
    }
}