{
	// node tools/r.js -o build-standalone.js
	// appDir: 'www/js',
	baseUrl: 'www/js',

	mainConfigFile: 'www/js/main-standalone.js',
	out: 'www-built/js/main-standalone-optimized.js',
	name: 'lib/almond',
	include: 'main-standalone',
	//wrap: false,
	optimize: 'uglify2', // 'none'

}