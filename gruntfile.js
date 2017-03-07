module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
          return name.replace('html/', '/pages/');
        }
      },
      main: {
        src: ['src/html/*.html', 'src/html/partials/*.html'],
        dest: 'build/templates.js'
      }
    },
    concat: {
      options: {
        separator: ";\n"
      },
      dist: {
        src: ['src/libs/jquery-1.12.4.min.js', 'src/libs/bootstrap.min.js', 'src/libs/angular.min.js', 'src/libs/angular-*.js', 'src/libs/*.js', 'build/templates.js', 'src/js/app.js', 'src/js/factory.js', 'src/js/directive.js', 'src/js/pages/*.js', 'src/js/run.js'],
        dest: 'build/concat.js'
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
    cssmin: {
      compress: {
        options: {
          banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */'
        },
        files: {
          'dist/css/store.min.css': ['src/css/*.css']
        }
      }
    },
    watch: {
      files: ['src/js/*.js', 'src/js/pages/*.js', 'src/libs/*.js', 'src/css/*.css', 'src/html/*.html'],
      tasks: ['js', 'karma', 'html2js', 'concat', 'uglify', 'cssmin']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');
  return grunt.registerTask('default', ['html2js', 'concat','babel', 'uglify', 'cssmin']);
};
