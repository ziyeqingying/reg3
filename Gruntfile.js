module.exports = function(grunt) {
    grunt.initConfig({

        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            files: {
                src: "dist/index.html",
                dest: "dist/index.html"
            }
        },
        copy: {
            html: {
                src: "./index.html", 
                dest: "./dist/index.html"
            },
            css: {
                src: "./index.css",
                dest: "./dist/index.css"
            }
        }
    })


    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");

    grunt.registerTask("release", ['copy', 'htmlmin', 'cssmin']);
}