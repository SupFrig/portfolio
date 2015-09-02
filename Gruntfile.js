module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	sprites: {
      skin: {
        src: ['img/skin/sprite/*.png'],
        css: 'css/sprites.css',
        map: 'img/skin/sprite.png',
		margin: 15
      },
	  pictos: {
        src: ['img/skin/pictos/*.png'],
        css: 'css/pictos.css',
        map: 'img/skin/pictos.png',
		margin: 15
      }
    },
	concat: {
	   js: {
		options: {
	      separator: ';',
	    },
		src: ['js/dev/*.js'],
  	    dest: 'js/base.concatenated.js',
	  },
	  css: {
		options: {
	      separator: '',
	    },
		src: ['css/dev/*.css','css/sprites.css','css/pictos.css'],
  	    dest: 'css/base.css',
	  },
	},
    uglify: {
      options: {
		compress: true,
		mangle: true,
		sourceMap: true
	  },
      build: {
        src: 'js/base.concatenated.js',
        dest: 'js/base.min.js'
      }
    },
	cssmin: {
	  options: {
		shorthandCompacting: false,
		roundingPrecision: -1
	  },
	  target: {
		files: {
		  'css/base.min.css': ['css/base.css']
		}
	  }
	}
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-imagine');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  // Default task(s).
  grunt.registerTask('default', ['sprites','concat','uglify','cssmin']);

};