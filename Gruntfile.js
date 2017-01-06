module.exports = function(grunt) {
    grunt.file.setBase(__dirname);
    var packdir = '../tool/'; //package.json所在的目录
    var npmdir = '../tool/node_modules/'; //npm模块路径

	grunt.initConfig({
		pkg: grunt.file.readJSON(packdir+'package.json'),
        //coreui文件复制
		copy: {
			coreui: {
				expand: true,
				cwd: '../coreui/',
				src: ['js/widget/lib/*'],
				dest: '../dist/coreui/'
			}
		},
        //coreui css打包压缩
		cssmin: {
			minify: {
				expand: true,
				cwd: '../coreui/',
				src: ['css/page/*.css'],
				dest: '../dist/coreui/'
			}
		}
	});

    grunt.loadTasks(npmdir+'grunt-contrib-copy/tasks');
    grunt.loadTasks(npmdir+'grunt-contrib-cssmin/tasks');

    /*******提测或上线执行*********/
    // 打包压缩
	grunt.registerTask('default', 'default', function(){
        grunt.task.run(['copy','cssmin']);
	});
};
