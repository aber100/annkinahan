module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          keepalive: grunt.option('keepalive'),
          port: grunt.option('port') || 8000,
          base: grunt.option('root') || 'build'
        }
      }
    },
    sass: {
      options: {
        style: 'compressed'
      },
      dist: {
        files: {'build/css/site.css' : 'assets/css/site.scss'}
      }
    },
    jade: {
      compile: {
        options: {pretty: true},
        files: [{
          cwd: 'views',
          src: '*.jade',
          dest: 'build/',
          expand: true,
          ext: '.html'
        }]
      }
    },
    watch: {
      sass: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {livereload: true}
      },
      jade: {
        files: ['views/**/*.jade'],
        tasks: ['jade:compile'],
        options: {livereload: true}
      },
      js: {
        files: ['assets/js/*.js'],
        tasks: ['copy'],
        options: {livereload: true}
      }
    },
    // To do: break up js and images
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'assets',
          src: ['images/**', 'js/**'],
          dest: 'build'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('build',['copy','sass','jade']);
  grunt.registerTask('default',['build','connect','watch']);
}