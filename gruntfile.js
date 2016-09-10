module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            debug: [
                'src/content/*',
                'src/libs/*',
                '!src/libs/_references.js',
                '!src/content/style.css'
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
        },
        concat: {
            options: {
                separator: ';',
            },
            debug: {
                src: [
                    'src/libs/jquery.min.js',
                    'src/libs/bootstrap.min.js',
                    'src/libs/angular.min.js',
                    'src/libs/angular-ui-router.min.js'
                ],
                dest: 'src/libs/built.js'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('debug', ['clean', 'copy:debug','concat:debug']);
    grunt.registerTask('release', ['copy:release']);

}