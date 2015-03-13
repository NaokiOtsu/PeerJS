'use strict';

//------------------------------------------------------------------------------
//
//  Initialize
//
//------------------------------------------------------------------------------

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');

//--------------------------------------
//  Plugin tasks configuration
//--------------------------------------

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 9002,
          keepalive: true
        }
      }
    }

  }); // grunt.initConfig

  // Default task
  grunt.registerTask('default', [
    'connect'
  ]);

};
