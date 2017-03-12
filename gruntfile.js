module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
        files: {
            options: {
                configFile: "eslint.json"
            },
            src: ["src/app/**/*.js"]
        }
    },
    html2js: {
      options: {
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        rename: function(name) {
          return name.replace('views/', '/pages/');
        }
      },
      main: {
        src: ['src/views/*.html', 'src/views/partials/*.html'],
        dest: 'build/templates.js'
      }
    },
    concat: {
      options: {
        separator: ";\n"
      },
      dist: {
        src: ['src/libs/jquery-3.1.1.min.js', 'src/libs/bootstrap.min.js', 'src/libs/angular-*.js', 'src/libs/*.js', 'build/templates.js', 'src/app.js','src/app/routes.js', 'src/app/factory.js', 'src/app/directive.js', 'src/app/pages/*.js', 'src/app/run.js'],
        dest: 'build/concat.js'
      }
    },
    karma: {
      options: {
        // point all tasks to karma config file
        configFile: 'karma-conf.js'
      },
      unit: {
        // run tests once instead of continuously
        singleRun: true
      }
    },
    babel: {
        options: {
            presets: ['babel-preset-es2015'],
            sourceMap: true
        },
        dist: {
            files: {
                'build/store.js': ['build/concat.js']
            }
        }
    },
    uglify: {
      postCompile: {
        options: {
          mangle: true,
          sourceMap: false,
          drop_console: true,
          banner: '/*! <%= pkg.name %> minified - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        files: {
          'dist/js/store.min.js': ['build/store.js']
        }
      }
    },
    sass: {                              // Task
        dist: {
        files: {
              'build/css/store.css': 'src/scss/style.scss'
          }
        }
    },
    cssmin: {
      compress: {
        options: {
          banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */'
        },
        files: {
          'dist/css/store.min.css': ['build/css/store.css']
        }
      }
    },
    watch: {
      files: ['src/*.js','src/app/*.js', 'src/app/pages/*.js', 'src/libs/*.js', 'src/scss/*.scss', 'src/views/*.html'],
      tasks: ['eslint', 'html2js', 'concat','babel', 'uglify', 'sass','cssmin', 'watch'],
      options: {
            livereload: true
      }
    },
    connect: {
        server: {
          options: {
            port: 9000,
            base: './',
            hostname: '0.0.0.0',
            protocol: 'http',
            livereload: true,
            open: true,
          }
        }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks("gruntify-eslint");
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-serve');
  grunt.registerTask('test', [
    'karma'
  ]);
  return grunt.registerTask('default', ['eslint', 'html2js', 'concat','babel', 'uglify', 'sass', 'cssmin', 'connect', 'watch']);
};
