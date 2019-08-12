layui.config({
    base: $config.resUrl+'layuicms/common/js/'//定义基目录
}).extend({
    ajaxExtention: 'ajaxExtention',//加载自定义扩展，每个业务js都需要加载这个ajax扩展
    $tool: 'tool',
    $api:'api'
}).use(['form', 'layer', 'jquery', 'ajaxExtention', '$tool','$api'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        laypage = layui.laypage,
        $ = layui.jquery,
        $tool = layui.$tool ,
        $api = layui.$api;
    /**
     * 页面初始化
     * */
    function init() {
        //初始化下拉框
        initUid();
        initPosition();

    }

    init();

    /**
     * 初始化下拉框
     * */
    function initUid() {
        $api.GetUid(null,function (res) {
            var data = res.data;
            if (data.length > 0) {
                var html = '<option value="">--请选择--</option>';
                for (var i = 0; i < data.length; i++) {
                    html += '<option value="' + data[i].uid + '">' + data[i].uname + '</option>>';
                }
                $('#uid').append($(html));
                form.render();
            }
        });
    }
    function initPosition() {
        $api.GetPosition(null,function (res) {
            var data = res.data;
            if (data.length > 0) {
                var html = '<option value="">--请选择--</option>';
                for (var i = 0; i < data.length; i++) {
                    html += '<option value="' + data[i].id + '">' + data[i].resName + '</option>>';
                }
                $('#position').append($(html));
                form.render();
            }
        });
    }


    /**
     * 表单提交
     * */
    form.on("submit(addYongHu)", function (data) {
        var username = data.field.username;
        var uid = data.field.uid;
        var tel = data.field.tel;
        var password = data.field.password;

        //请求
        var req = {
            username:username,
            uid:uid,
            tel:tel,
            password:password,
        };

        $api.AddYongHu(req,function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            layer.msg("注册成功！", {time: 1000}, function () {
                layer.closeAll("iframe");
                //刷新父页面
                parent.location.reload();
            });
        });

        return false;
    })

});


