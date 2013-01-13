/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		uglify : {},

		requirejs: {
			compile: {
				options: {

					// appDir: 'public/js', //'public'
					//baseUrl: 'public/js',
					baseUrl: 'public/js',
					mainConfigFile: 'public/js/app/common.js',
					dir: 'public/js/dist',

					normalizeDirDefines: true,
					removeCombined: true,
					enforceDefine: true,
					skipDirOptimize: true,
					// Do not wrap everything in an IIFE
					//wrap: false,

					//optimize: 'uglify2',
					optimize: 'none', // need some readable source for development
					modules: [
						//First set up the common build layer.
						{
							//module names are relative to baseUrl
							name: 'app/common',
							//List common dependencies here. Only need to list
							//top level dependencies, "include" will find
							//nested dependencies.
							include: [
								'jquery',
								'app/lib',
								'app/controller/Base',
								'app/model/Base',

								//'underscore',
								//'backbone',

								//'requireLib',// include requirejs in the common, kills require()from console
								//'text'
							]
						},

						//Now set up a build layer for each main layer, but exclude
						//the common one. "exclude" will exclude nested
						//the nested, built dependencies from "common". Any
						//"exclude" that includes built modules should be
						//listed before the build layer that wants to exclude it.
						//The "page1" and "page2" modules are **not** the targets of
						//the optimization, because shim config is in play, and
						//shimmed dependencies need to maintain their load order.
						//In this example, common.js will hold jquery, so backbone
						//needs to be delayed from loading until common.js finishes.
						//That loading sequence is controlled in page1.js.
						{
							//module names are relative to baseUrl/paths config
							name: 'app/main1',
							exclude: ['app/common']
						},

						{
							//module names are relative to baseUrl
							name: 'app/main2',
							exclude: ['app/common']
						}

					]



				}

			}
		},

		// TODO: Take the built files and minify them
		min: {

			"public/js/dist/release/require.js": [
				"public/js/lib/require.js"
			]

		}
	});

	grunt.registerTask('requirejs-standalone', 'Build standalone requirejs package', function(){
		// var standalone = grunt.file.readJSON('build-standalone.js');
		var requirejs = require('requirejs');
		var done = this.async();
		var options = {
			baseUrl: 'www/js',
			mainConfigFile: 'www/js/main-standalone.js',
			out: 'www-built/js/main-standalone-optimized.js',
			name: 'lib/almond',
			include: 'main-standalone',
			//wrap: false,
			optimize: 'uglify2', // 'none'
		};

		requirejs.optimize(options, function(response){
			grunt.log.write(response);
			done()
		});
	});

	// load non-stock tasks
	grunt.loadNpmTasks('grunt-contrib');

	grunt.registerTask("default", "requirejs requirejs-standalone");

};
