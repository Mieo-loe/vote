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

    var username;
    var tel;
    var password;
    var position;
    var uid;

    /**
     * 页面初始化
     * */
    function init() {
        //初始化
        loadUser();
        initUid();
        initPosition();

    }

    init();

    /**
     * 初始化用户
     */
    function loadUser() {
        var queryArgs = $tool.getQueryParam();
        username = queryArgs['username'];

        var req={
            username:username,
        }

        $api.GetYongHu(req,function (res) {
            var data = res.data;
            console.log(data)

            username = data.username;
            uid = data.uid;
            tel = data.tel;
            position = data.position;
            password = data.password;

            $("[name = 'username']").val(username);
            $("[name = 'tel']").val(tel);
            $("[name = 'password']").val(password);

        });

    }

    /**
     * 初始化下拉框
     * */
    function initUid() {
        $api.GetUid(null,function (res) {
            var data = res.data;
            if (data.length > 0) {
                var html = '';
                for (var i = 0; i < data.length; i++) {
                    if (uid==data[i].uid){
                        html += '<option selected="selected" value="' + data[i].uid + '">' + data[i].uname + '</option>>';
                    } else {
                        html += '<option value="' + data[i].uid + '">' + data[i].uname + '</option>>';
                    }
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
                var html = '';
                for (var i = 0; i < data.length; i++) {
                    if (position==data[i].id) {
                        html += '<option selected="selected" value="' + data[i].id + '">' + data[i].resName + '</option>>';
                    } else{
                        html += '<option value="' + data[i].id + '">' + data[i].resName + '</option>>';
                    }

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
        var position = data.field.position;
        //请求
        var req = {
            username:username,
            uid:uid,
            tel:tel,
            position:position,
            password:password,
        };

        $api.EditYongHu(req,function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            if (data='success'){
                layer.msg("修改信息成功！", {time: 1000}, function () {
                    layer.closeAll("iframe");
                    //刷新父页面
                    parent.location.reload();
                });
            }

        });

        return false;
    })

});


