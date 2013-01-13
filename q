[1mdiff --git a/build-standalone.js b/build-standalone.js[m
[1mindex 9b64fd7..4014983 100644[m
[1m--- a/build-standalone.js[m
[1m+++ b/build-standalone.js[m
[36m@@ -1,13 +1,10 @@[m
 {[m
[31m-	// node tools/r.js -o build-standalone.js[m
[31m-	// appDir: 'www/js',[m
[31m-	baseUrl: 'www/js',[m
[32m+[m	[32m"baseUrl": "www/js",[m
 [m
[31m-	mainConfigFile: 'www/js/main-standalone.js',[m
[31m-	out: 'www-built/js/main-standalone-optimized.js',[m
[31m-	name: 'lib/almond',[m
[31m-	include: 'main-standalone',[m
[31m-	//wrap: false,[m
[31m-	optimize: 'uglify2', // 'none'[m
[32m+[m	[32m"mainConfigFile": "www/js/main-standalone.js",[m
[32m+[m	[32m"out": "www-built/js/main-standalone-optimized.js",[m
[32m+[m	[32m"name": "lib/almond",[m
[32m+[m	[32m"include": "main-standalone",[m
[32m+[m	[32m"optimize": "uglify2"[m
 [m
 }[m
\ No newline at end of file[m
[1mdiff --git a/grunt.js b/grunt.js[m
[1mindex c05b06d..7620013 100644[m
[1m--- a/grunt.js[m
[1m+++ b/grunt.js[m
[36m@@ -89,9 +89,29 @@[m [mmodule.exports = function(grunt) {[m
 		}[m
 	});[m
 [m
[32m+[m	[32mgrunt.registerTask('requirejs-standalone', 'Build standalone requirejs package', function(){[m
[32m+[m		[32m// var standalone = grunt.file.readJSON('build-standalone.js');[m
[32m+[m		[32mvar requirejs = require('requirejs');[m
[32m+[m		[32mvar done = this.async();[m
[32m+[m		[32mvar options = {[m
[32m+[m			[32mbaseUrl: 'www/js',[m
[32m+[m			[32mmainConfigFile: 'www/js/main-standalone.js',[m
[32m+[m			[32mout: 'www-built/js/main-standalone-optimized.js',[m
[32m+[m			[32mname: 'lib/almond',[m
[32m+[m			[32minclude: 'main-standalone',[m
[32m+[m			[32m//wrap: false,[m
[32m+[m			[32moptimize: 'uglify2', // 'none'[m
[32m+[m		[32m};[m
[32m+[m
[32m+[m		[32mrequirejs.optimize(options, function(response){[m
[32m+[m			[32mgrunt.log.write(response);[m
[32m+[m			[32mdone()[m
[32m+[m		[32m});[m
[32m+[m	[32m});[m
[32m+[m
 	// load non-stock tasks[m
 	grunt.loadNpmTasks('grunt-contrib');[m
 [m
[31m-	grunt.registerTask("default", "requirejs");[m
[32m+[m	[32mgrunt.registerTask("default", "requirejs requirejs-standalone");[m
 [m
 };[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 63abc49..460a346 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -6,6 +6,7 @@[m
   "main": "main.js",[m
   "dependencies": {[m
     "grunt": "~0.3.17",[m
[31m-    "grunt-contrib": "~0.3.0"[m
[32m+[m[32m    "grunt-contrib": "~0.3.0",[m
[32m+[m[32m    "requirejs": "~2.1.2"[m
   }[m
 }[m
