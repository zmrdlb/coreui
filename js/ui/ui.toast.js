/**
 * @fileoverview toast 提示层
 * @version 1.0 | 2016-01-06 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */
 define(['$','COREUI/ui.layer'],function($,Layer){

     var toast = null;

     function createToast(){
         toast = new Layer({
             layer: {
                 classname: 'coreui-g-layer coreui-g-layer-toast'
             },
             mask: {
                 bgcolor: '#fff', //背景色
     			 opacity: 0, //遮罩透明度
             }
         });

         toast.hideaftercal.add(function(){
             toast.destroy();
             toast = null;
         });
     }


     return {
         show: function(content,hideaftercal){
             createToast();
             toast.setContent(content);
             toast.hideaftercal.add(function(){
                 if(typeof hideaftercal == 'function'){
                     hideaftercal();
                 }
             });
             toast.show();
             setTimeout(function(){
                 toast.hide();
             },2000);
         }
     }
 });
