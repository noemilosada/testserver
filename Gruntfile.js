module.exports = function(grunt) {

  /**
   * Grunt init configuration
   */
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /* Server
    --------------------------------------------- */
    connect: {
      server: {
        options: {
          port: 9001,
          keepalive: true,
          base: './'
        }
      }
    }

  });

  /**
   * Load plugin tasks
   */
  grunt.loadNpmTasks('grunt-contrib-connect');

  /**
   * Register tasks
   */
  grunt.registerTask('build', ['connect']);

// END Grunt module
};
