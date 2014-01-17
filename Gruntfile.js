module.exports = function (grunt) {
    grunt.registerTask('watch', ['watch']);
	grunt.registerTask('connect', ['connect']);

    grunt.initConfig({
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: [
                    'assets/js/vendor/*.js',
                    'assets/js/app.js'
                ],
                dest: 'build/js/app.js'
            },
        },
        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    'build/js/app.min.js': ['build/js/app.js']
                }
            }
        },
        less: {
            dev: {
                options: {
                    compress: true,
                    sourceMap: true,
                    sourceMapRootpath: '/'
                },
                files: {
                    "build/css/core.css": "assets/less/core.less"
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/img/'
                }]
            }
        },
		connect: {
			server: {
				port: 8000,
				base: './'
			}
		},
        watch: {
            js: {
                files: ['assets/js/**/*.js'],
                tasks: ['concat:js', 'uglify:js'],
                options: {
                    livereload: true,
                }
            },
            css: {
                files: ['assets/less/**/*.less'],
                tasks: ['less:dev'],
                options: {
                    livereload: true,
                }
            },
            images: {
                files: ['assets/img/**/*.{png,jpg,gif}'],
                tasks: ['imagemin:dynamic'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
};