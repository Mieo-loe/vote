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

    var ids = new Array();

    /**
     * 页面初始化
     * */
    function init() {
        //初始化下拉框
        initLog();
    }

    init();


    /**
     * 添加复选框并设置状态
     * */
    function initLog() {

        $api.GetLog(null,function (res) {
            var data = res.data;
            if (data.length > 0) {
                var html = '';
                // var j = 0;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].resName){
                        html += '<input type="checkbox" checked name="Logs" title="' + data[i].resName + '" value="' + data[i].id + '"/>';
                    }
                }
                $('#adduid').append($(html));
                form.render();
            }
        });
    }

    $("#addLogs").click(function () {
        layer.open({
            type: 2,
            title: '选择操作',
            area : ['400px' , '300px'],
            content: '../../../page/system/GradeLogadm/addLogs.html',
        });
    });

    /**
     * 表单提交
     * */
    form.on("submit(editry)", function (data) {

        $("input[name='Logs']:not(:checked)").each(function() {
            // console.log($(this).val());
            ids.push($(this).val())
        });

        var req = {
            ids: ids.toString()
        }

        $api.DeleteLogs(req,function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            if (data = "success"){
                layer.msg("操作成功！", {time: 1000}, function () {
                    var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                    parent.layer.close(index);
                    //刷新父页面
                    parent.location.reload();
                });
            }
        });

        return false;
    })

});


