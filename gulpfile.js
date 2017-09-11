// imports
const
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  pug = require('gulp-pug'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload');

// Path

const viewsPath = './views/';
const sassPath = './sass/';
const scriptPath = './scripts/'
const distPath = './dist/';

// opts
const pugOpt = {
  in: viewsPath + 'pages/*.pug',
  out: distPath,
  watch: viewsPath  + '**/*.pug',
  opts: {
    doctype: 'html',
    pretty: true
  },
};

const scriptOpt = {
  in:scriptPath + '**/*.js',
  out: distPath + 'scripts',
  watch: scriptPath + '**/*.js',
}

const fontAwesomeOpt = {
  in: './node_modules/font-awesome-sass/',
};

const sassOpt = {
  in: sassPath + 'main.scss',
  out: distPath + 'css',
  watch: sassPath + '**/*.scss',
  opts: {
      outputStyle: 'nested',
      precision: 8,
      errLogToConsole: true,
      includePaths: [
        fontAwesomeOpt.in + 'assets/stylesheets'
      ],
  },
};

const fontOpt = {
  in: [
    './res/fonts/*.*',
    fontAwesomeOpt.in + 'assets/fonts/**/*'
  ],
  out: '../eth/assests/fonts/',
};


// tasks
gulp.task('default', () => {
  livereload.listen();
  gulp.watch(pugOpt.watch, ['views']);
  gulp.watch(scriptOpt.watch, ['scripts']);
  gulp.watch(sassOpt.watch, ['styles']);
});

gulp.task('views', () => {
  return gulp
    .src(pugOpt.in)
    .pipe(plumber())
    .pipe(pug(pugOpt.opts))
    .pipe(gulp.dest(pugOpt.out))
    .pipe(livereload());
});

gulp.task('scripts', () => {
  return gulp
    .src(scriptOpt.in)
    .pipe(plumber())
    .pipe(gulp.dest(scriptOpt.out))
    .pipe(livereload());
});

gulp.task('styles', () => {
  return gulp
    .src(sassOpt.in)
    .pipe(plumber())
    .pipe(sass(sassOpt.opts))
    .pipe(gulp.dest(sassOpt.out))
    .pipe(livereload());
});

gulp.task('fonts', function () {
  return gulp
    .src(fontOpt.in)
    .pipe(plumber())
    .pipe(gulp.dest(fontOpt.out));
});
