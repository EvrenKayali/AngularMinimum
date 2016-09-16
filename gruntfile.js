module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            debug: [
                'src/content/*',
                'src/libs/*',
                '!src/libs/_references.js',
                '!src/content/style.css'
            ],
            release: [
                'release/*'
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
                    { expand: true, cwd: 'src/libs', src: 'built.min.js', dest: 'release/libs' },
                    { expand: true, cwd: 'src/fonts', src: '**', dest: 'release/fonts' },
                    { expand: true, cwd: 'src/views', src: '**', dest: 'release/views' },
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
                    'src/libs/angular-ui-router.min.js',
                    'src/libs/angular-animate.min.js',
                    'src/app/app.js',
                    'src/app/controllers/*.js'
                ],
                dest: 'src/libs/built.js'
            }
        },
        uglify: {
            debug: {
                files: {
                    'src/libs/built.min.js': ['src/libs/built.js']
                }
            }
        },
        processhtml: {
            options: {
                process: true
            },
            release: {
                files: {
                    'release/index.html': ['src/index.html']
                }
            },
        },
        cssmin: {
            release: {
                options: {
                    banner: '/*! MyLib.js 1.0.0 | Aurelio De Rosa (@AurelioDeRosa) | MIT Licensed */'
                },
                files: {
                    'release/content/style.min.css': ['src/content/**/*.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');

    grunt.registerTask('debug', ['clean:debug', 'copy:debug', 'concat:debug', 'uglify:debug']);
    grunt.registerTask('release', ['clean:release', 'copy:release', 'processhtml:release', 'cssmin:release']);

}