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
        },
        cssmin: {
            "dist/index.css": "index.css"
        },
        uglify: {
            release: {
                files: {
                    "index.js": "dist/index.js"
                }
            }
        }
    })


    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("release", ['copy', 'htmlmin', "cssmin", "uglify"]);
}