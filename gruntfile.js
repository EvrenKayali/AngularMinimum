module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            debug: [
                'src/content/*',
                'src/libs/*',
                '!src/libs/_references.js'
            ]
        },
        copy: {
            debug: {
                files: [
                    { expand: true, cwd: 'libs/jquery/dist', src: 'jquery.min.js', dest: 'src/libs' },
                    { expand: true, cwd: 'libs/bootstrap/dist/css', src: '*.min.css', dest: 'src/content' },
                    { expand: true, cwd: 'libs/bootstrap/dist/js', src: '*.min.js', dest: 'src/libs' },
                    { expand: true, cwd: 'libs/bootstrap/dist/fonts', src: '**', dest: 'src/fonts' },
                    { expand: true, cwd: 'libs/components-font-awesome/css', src: '*.min.css', dest: 'src/content' },
                    { expand: true, cwd: 'libs/components-font-awesome/fonts', src: '**', dest: 'src/fonts' },
                    { expand: true, cwd: 'libs/angular', src: '*.min.js', dest: 'src/libs' },
                    { expand: true, cwd: 'libs/angular-ui-router/release', src: '*.min.js', dest: 'src/libs' },
                    { expand: true, cwd: 'libs/angular-animate', src: '*.min.js', dest: 'src/libs' }
                ]
            },
            release: {
                files: [
                    { expand: true, cwd: 'libs/bootstrap/dist/css', src: '*.min.css', dest: 'release/content' }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('debug', ['clean', 'copy:debug']);
    grunt.registerTask('release', ['copy:release']);

}