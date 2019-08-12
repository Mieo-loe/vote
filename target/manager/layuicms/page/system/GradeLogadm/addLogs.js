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

    var id;
    var resKind;
    // var resName;
    var datalog;

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
            datalog = res.data;
            if (datalog.length > 0) {
                var html = '';
                for (var i = 0; i < datalog.length; i++) {
                    html += '<option value="' + datalog[i].resNum + '">' + datalog[i].resNum + '</option>>';
                    resKind = datalog[i].resKind;
                    // resName = data[i].resName;
                    // $("#resName").val(data[i].resName);
                }
                $('#uid').append($(html));
                form.render();
            }
        });
    }

    /**
     * 监听select框的选择
     */
    form.on('select(selectlog)', function(data){
        var options = data.value;
        for (var i = 0; i < datalog.length; i++) {
            console.log(datalog[i].resNum)
            if (datalog[i].resNum == options) {
                $("#resName").val(datalog[i].resName);
            }
         }
    });


    /**
     * 表单提交
     * */
    form.on("submit(editry)", function (data) {

        var resNum = data.field.uid;
        var resName = data.field.resName;

        var req = {
            resKind: resKind,
            resNum: resNum,
            resName: resName
        }

        $api.AddLogs(req,function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            layer.msg("操作成功！", {time: 1000}, function () {
                var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                layer.closeAll("iframe");
                //刷新父页面
                parent.location.reload();
            });
        });

        return false;
    })

});


