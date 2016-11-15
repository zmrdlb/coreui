/**
 * @fileoverview 公共alert弹层
 * @version 1.0 | 2016-11-14 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */
define(['$','liblayers/alertSingle','libcompatible/csssuport','text!COREUI/ui.alert.html'],function($,AlertSingle,Csssuport,Tpl){

    AlertSingle.setconfig({
        layer: {
            classname: 'coreui-g-layer-alert',
            custom: {
                hide: function(layer){
                    layer.removeClass('show-up').addClass('hide-up');
                    if(Csssuport.transition){
                        setTimeout(function(){
                            layer.hide().css('top','0px');
                        },300);
                    }else{
                        layer.hide().css('top','0px');
                    }
                }
            }
        },
        mask: {
            bgcolor: '#000'
        },
        alert: {
            frametpl: Tpl
        }
    });

    var layerobj = AlertSingle.getlayerobj();
    layerobj.layer.css('top','0px').addClass('hide-up');

    layerobj.pos.poscal.add(function(){
        layerobj.layer.removeClass('hide-up').addClass('show-up');
    });

    return AlertSingle;
});
