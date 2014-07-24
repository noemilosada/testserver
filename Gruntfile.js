module.exports = function(grunt) {

  /**
   * Grunt init configuration
   */
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /* Server
    --------------------------------------------- */
    connect: {
      options: {
        port: 9001,
        livereload: 9001
      },
      livereload: {
        options: {
          open: true,
          base: './'
        }
      }
    },

    /* Watch tasks
    --------------------------------------------- */
    watch: {
      all: {
        files: 'index.html',
        options: {
          livereload: 9001
        }
      }
    }

  });

  /**
   * Load plugin tasks
   */
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  /**
   * Register tasks
   */
  grunt.registerTask('build', ['connect:livereload', 'watch']);

// END Grunt module
};
