const Pa11y = require('pa11y');
const browserSync = require('browser-sync').create();
const fs = require('fs');

browserSync.init({
    server: './app/tests',
    directory: true,
    serveStaticOptions: {
        extensions: ["html"]
    }
});

let urls = [];
const basePath = 'http://localhost:3000/';
// Put together some options to use in each test
const options = {
    log: {
        debug: console.log,
        error: console.error,
        info: console.log
    }
};

fs.readdirSync('./app/tests').forEach(file => {
    urls.push(Pa11y(basePath + file, options).run());
});

// Declare an async function to allow us to use await
async function runTests() {
    try {
        const results = await Promise.all(urls);
        results.forEach(result => {
            console.log(result);
        });
        console.log('Shutting down browserSync server');
        browserSync.exit();
    } catch (error) {
        console.error(error.message);
    }
}

runTests()