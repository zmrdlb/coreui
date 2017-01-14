/**
 * @fileoverview loading 提示层
 * @version 1.0 | 2016-01-06 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */
 define(['$','COREUI/ui.layer'],function($,Layer){

     var loading = null;

     function createLoading(){
         loading = new Layer({
             layer: {
                 classname: 'coreui-g-layer coreui-g-layer-loading'
             },
             mask: {
                 bgcolor: '#fff', //背景色
     			 opacity: 0, //遮罩透明度
             }
         });

         loading.hideaftercal.add(function(){
             loading.destroy();
             loading = null;
         });
     }


     return {
         show: function(){
             createLoading();
             loading.setContent('<div class="typing_loader"></div>');
             loading.show();
         },
         hide: function(){
             loading.hide();
         }
     }
 });
