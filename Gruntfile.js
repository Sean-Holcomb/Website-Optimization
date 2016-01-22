module.exports = function(grunt) {
  //var mozjpeg = require('imagemin-mozjpeg');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: {
          'js/perfmatters.min.js': 'js/perfmatters.js'
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'src/index.html',
          'project-2048.html': 'src/project-2048.html',
          'project-mobile.html': 'src/project-mobile.html',
          'project-webperf.html': 'src/project-webperf.html',
          'views/pizza.html': 'src/pizza.html'
        }
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/style.min.css': 'css/style.css',
          'css/portrait.min.css': 'css/portrait.css',
          'css/print.min.css': 'css/print.css'
        }
      }
    },

    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }],

        },
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'img/src',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'img/'                  // Destination path prefix
        }]
      }
    },

    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: './',
        src: ['**/*'],
        dest: 'public/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.registerTask('default', ['uglify', 'htmlmin', 'cssmin', 'imagemin', 'compress']);

};