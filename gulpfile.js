var gulp = require('gulp');
var gulpif = require('gulp-if');
var args = require('yargs').argv;
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');


var src = 'src/';
var dist = 'dist/';

var tsconfig = typescript.createProject('tsconfig.json');

gulp.task('build-ts',function(){

	return gulp.src(src + 'app/**/*.ts')
	.pipe(gulpif(!args.production,sourcemaps.init()))
	.pipe(typescript(tsconfig))
	.pipe(gulpif(!args.production,sourcemaps.write()))
	.pipe(gulp.dest(dist + 'app'));
});

gulp.task('build-copy',function(){

	gulp.src([src + 'app/**/*.html', src + 'app/**/*.htm', src + 'app/**/*.css'])
	.pipe(gulp.dest(dist + 'app'));

	gulp.src([src + 'index.html'])
	.pipe(gulp.dest(dist));

	gulp.src([src + 'systemjs,config.js'])
	.pipe(gulp.dest(dist));
});


gulp.task('clean',function(){
	del([dist + 'app/**/*.html', dist + 'app/**/*.htm', dist + 'app/**/*.css', dist + 'app']);
});


gulp.task('vendor',function(){
	del([dist + 'vendor/**/*']);

	gulp.src(['node_modules/@angular/**'])
	.pipe(gulp.dest(dist + 'vendor/@angular'));

	gulp.src(['node_modules/es6-shim/**'])
	.pipe(gulp.dest(dist + 'vendor/es6-shim'));

	gulp.src(['node_modules/reflect-metadata/**'])
	.pipe(gulp.dest(dist + 'vendor/reflect-metadata'));

	gulp.src(['node_modules/rxjs/**'])
	.pipe(gulp.dest(dist + 'vendor/rxjs'));

	gulp.src(['node_modules/systemjs/**'])
	.pipe(gulp.dest(dist + 'vendor/systemjs'));

	gulp.src(['node_modules/zone.js/**'])
	.pipe(gulp.dest(dist + 'vendor/zone.js'));

});


gulp.task('watch',function(){

	gulp.watch(src + '**/*.ts',['build-ts']);
	gulp.watch(src + '**/*.{html,htm,css}',['build-copy']);


});

gulp.task('build',['build-ts','build-copy']);
gulp.task('default',['build','watch']);
