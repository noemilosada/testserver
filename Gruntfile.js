module.exports = function(grunt) {

  /**
   * Grunt init configuration
   */
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /* Watch tasks
    --------------------------------------------- */
    watch: {
        options: {
          livereload: true // Set livereload to trigger a reload upon change
        },

        all: {
          files: 'index.html', // Change this if you are not watching index.html
          options: {
            livereload: true  // Set livereload to trigger a reload upon change
          }
        }
    },

    /* Server
    --------------------------------------------- */
    connect: {
      server: {
        options: {
          port: 9001,
          keepalive: true,
          base: './index.html',
          livereload: 35729
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
  grunt.registerTask('build', ['watch', 'connect:livereload']);

// END Grunt module
};
