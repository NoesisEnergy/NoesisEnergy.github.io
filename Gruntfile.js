/*global module:true, require:true */

module.exports = function(grunt)
{
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig(
    {
        browserSync: 
        {
            bsFiles: 
            {
                src : 
                [
                    './**/*.css',
                    './**/*.html'
                ]
            },
            options: 
            {
                server: 
                {
                    baseDir: "./"
                }
            }
        }

    });
};
