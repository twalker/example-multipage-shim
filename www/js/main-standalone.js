requirejs.config({
    baseUrl: './js',
    paths: {
    	jquery: 'lib/jquery',
    	underscore: 'lib/underscore',
        backbone: 'lib/backbone'
    },

    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});


require(['jquery', 'backbone', 'underscore'], function (jQuery, Backbone, _) {
	jQuery(function () {
		//console.log('instantiate standalone app');
		jQuery('body')
			.append('<h1>standalone</h1>')
			.append('<p>backbone version: ' + Backbone.VERSION + '</p>')
			.append('<p>underscore version: ' + _.VERSION + '</p>');
	});
});