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
            }
        }
    })


    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("release", ['copy', 'htmlmin']);
}