// Karma configuration
// Generated on Fri Jul 18 2014 00:17:27 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs', 'traceur'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'test-main.js', included: true},
      {pattern: 'dist/libs.js', included: true},
      {pattern: 'bower_components/angular-mocks/angular-mocks.js', included: true},
      {pattern: 'src/main/**/*.js', included: false},
      {pattern: 'src/test/**/*-spec.js', included: false},
      {pattern: 'node_modules/es6-shim/es6-shim.js', included: false}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/**/*.js': ['traceur']
    },

    traceurPreprocessor: {
        options: {
            sourceMap: false,
            modules: 'amd'
        }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
