module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	sass: {
      dist: {
        files: {
          'css/base.css': 'css/dev/base.scss'
        }
      }
    },
	watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: 'js/dev/*.js',
        tasks: ['concat:js']
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
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-imagine');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['sass','concat','uglify','cssmin']);

};
