/**
 *  The MIT License (MIT)
 *
 *  Copyright (c) 2015 Claudio Procida
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

var istanbul = require('browserify-istanbul');

// Karma configuration
// Generated on Fri Sep 04 2015 11:20:57 GMT+0100 (IST)
module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		plugins: [
			'karma-phantomjs-launcher'
			, 'karma-junit-reporter'
			, 'karma-chrome-launcher'
			, 'karma-coverage'
			, 'karma-jasmine'
			, 'karma-browserify'
		],


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: [
			'jasmine'
			, 'browserify'
		],


		// list of files / patterns to load in the browser
		files: [
			'../src/js/**/*.js'
			, './unit/**/*.spec.js'
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'../src/**/*.js' : ['browserify']
			, './unit/*.js' : ['browserify']
		},

		coverageReporter: {
			reporters: [
				{ type: 'html' }
        , { type: 'cobertura' }
      ]
			, dir : '../coverage'
		},

		// using browserify-istanbul as suggested by
		// https://github.com/karma-runner/karma-coverage/issues/16#issuecomment-62091196
		browserify: {
			debug: true
			, transform: [ 'brfs', istanbul({
				ignore: ['**/node_modules/**', '**/test/**']
			})]
    },

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: [
			'progress'
			, 'coverage'
			, 'junit'
		],

		junitReporter: {
			outputDir: '../test_results'
		},


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
		browsers: [
			'PhantomJS'
			, 'Chrome'
		],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	})
}
