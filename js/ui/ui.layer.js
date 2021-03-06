/**
 * @fileoverview 业务基本弹层类，填充了一些样式。业务所有自定义弹层将继承此类
 * @version 1.0 | 2016-11-14 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */
define(['$','liblayers/bombLayer','libinherit/extendClass','libcompatible/csssuport'],
function($,BombLayer,ExtendClass,Csssuport){

    /**
	 * 弹层类——创建并添加到指定容器中
     * @param {JSON} config 弹层配置参数 ，不是必填项
     * 		{
     * 	       container {Element} 存放弹层的容器。可不指定，默认弹层存放于body中的一个动态生成的div里
     * 	       pos:{}, //定位参数，具体说明可见方法layer/positionBomb中的config说明
     *         layer: {}, //弹层信息参数，具体说明可见方法layer/layer中的config说明
     * 		   mask: { //遮罩信息参数，具体说明可见方法layer/mask中的config说明。在此基础上进行以下扩展
     * 			  mask: true, //是否创建遮罩
     *            cmlhide: false //点击遮罩是否关闭弹层
     * 		   }
     *      }
	 */
    function UILayer(config){
        var _this = this;
        //添加自定义参数
        config = $.extend(true,{
            layer: {
                classname: 'coreui-g-layer',
                show: false,
                custom: {
                    hide: function(layer){
                        layer.removeClass('show-up').addClass('hide-up');
                        if(Csssuport.transition){
                            setTimeout(function(){
                                layer.hide();
                                _this.hideaftercal.fire(); //层隐藏后回调
                            },300);
                        }else{
                            layer.hide();
                            _this.hideaftercal.fire(); //层隐藏后回调
                        }
                    }
                }
            },
            mask: {
                classname: 'coreui-g-mask',
                opacity: Csssuport.transition? 0: 0.6,
                custom: {
                    hide: function(mask){
                        if(Csssuport.transition){
                            mask.css('opacity',0);
                            setTimeout(function(){
                                mask.hide();
                            },300);
                        }else{
                            mask.hide();
                        }
                    },
                    show: function(mask){
                        if(Csssuport.transition){
                            mask.show().css('opacity',0.6);
                        }else{
                            mask.show();
                        }
                    }
                }
            }
        },config || {});

        UILayer.superclass.constructor.call(this,config);

        var _layer = this.layer;

        _layer.addClass('hide-up');

        this.pos.poscal.add(function(){
            _layer.removeClass('hide-up').addClass('show-up');
        });
    }

    ExtendClass(UILayer,BombLayer);

    UILayer.prototype.hide = function(){
        if(this.isshow()){
			this.hidebeforecal.fire(); //层隐藏前回调
			this.mask && this.mask.hide();
			this._hide();
		}
    }

    return UILayer;
});
