/**
 * @fileoverview 公共alert弹层
 * @version 1.0 | 2016-11-14 版本信息
 * @author Zhang Mingrui | 592044573@qq.com
 * @return
 * */
define(['$','liblayers/alertSingle','text!COREUI/ui.alert.html'],function($,AlertSingle,Tpl){

    AlertSingle.setconfig({
        layer: {
            classname: 'coreui-g-layer-alert'
        },
        mask: {
            bgcolor: '#000'
        },
        alert: {
            frametpl: Tpl
        }
    });
    return AlertSingle;
});
