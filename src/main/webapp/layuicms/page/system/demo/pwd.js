layui.config({
    base: $config.resUrl+'layuicms/common/js/'//定义基目录
}).extend({
    ajaxExtention:'ajaxExtention',//加载自定义扩展，每个业务js都需要加载这个ajax扩展
    $tool:'tool',
    $api:'api'
}).use(['form', 'layer','$api', 'jquery','ajaxExtention','$tool'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        laypage = layui.laypage,
        $ = layui.jquery,
        $tool = layui.$tool,
        $api = layui.$api;


    /**
     * 初始化页面
     * */
    function init() {
        var zhanghao = window.sessionStorage.getItem("zhang");
        var zh = JSON.parse(zhanghao);
        for (var j = 0; j < zh.coll.length; j++) {
            var aa = ' <div class="zhanghao">\n' +
                '        <input type="text"  class="dx" value="' + zh.coll[j] + '">\n' +
                '\n' +
                '    </div>'
            $(".coll").append(aa);
        }

        form.render();//重新绘制表单，让修改生效
        // });

    }
    init();
});






