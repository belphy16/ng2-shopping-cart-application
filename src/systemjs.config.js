var map = {
	'app':'app',
	'rxjs':'vendor/rxjs',
	'@angular':'vendor/@angular'
};

var packages = {
	'app':{main: 'main.js', defaultExtension: 'js'},
	'rxjs':{defaultExtension: 'js'}
};

var packageNames = [
	'@angular/common',
	'@angular/compiler',
	'@angular/core',
	'@angular/http',
	'@angular/platform-browser',
	'@angular/platform-browser-dynamic',
	'@angular/router',
	'@angular/testing',
	'@angular/upgrade'
];

packageNames.forEach(function(pkgName){
	packages[pkgName] = {main: 'index.js', defaultExtension: 'js'};

});

var config = {
	map: map,
	packages: packages
};

System.config(config);