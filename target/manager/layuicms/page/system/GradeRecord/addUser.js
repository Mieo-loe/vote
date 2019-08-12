var renyuan = new Array();

layui.config({
    base: $config.resUrl + 'layuicms/common/js/'//定义基目录
}).extend({
    ajaxExtention: 'ajaxExtention',//加载自定义扩展，每个业务js都需要加载这个ajax扩展
    $tool: 'tool',
    $api: 'api'
}).use(['form', 'layer', 'jquery', 'ajaxExtention', '$tool', '$api'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        laypage = layui.laypage,
        $ = layui.jquery,
        $tool = layui.$tool,
        $api = layui.$api;

    var uids = new Array();
    var uid = new Array();

    /**
     * 页面初始化
     * */
    function init() {
        //初始化下拉框
        initUid();
    }

    init();

    /**
     * 初始化下拉框
     * */
    function initUid() {
        var queryArgs = $tool.getQueryParam();
        uids = queryArgs['renyuan'];
        for (var a=0; a<uids.length; a++){
            if (/^\d+$/.test(uids[a])){
                uid.push(uids[a]);
            }
        }

        $api.GetUid(null, function (res) {
            var data = res.data;
            if (data.length > 0) {
                var html = '';
                var j = 0;
                for (var i = 0; i < data.length; i++) {
                    if (uid.length == 0) {
                        html += '<input type="checkbox" name="' + data[i].uid + '" title="' + data[i].uname + '" value="' + data[i].uid + '"/>';
                    } else {
                        if(data[i].uid == uid[j]){
                            html += '<input type="checkbox" checked name="' + data[i].uid + '" title="' + data[i].uname + '" value="' + data[i].uid + '"/>';
                            j++;
                        } else {
                            html += '<input type="checkbox" name="' + data[i].uid + '" title="' + data[i].uname + '" value="' + data[i].uid + '"/>';
                        }
                    }
                    // html += '<input type="checkbox" name="' + data[i].uid + '" title="' + data[i].uname + '" value="' + data[i].uid + '"/>';
                }
                $('#adduid').append($(html));
                form.render();
            }
        });
    }


    /**
     * 表单提交
     * */
    form.on("submit(addry)", function (data) {

        for (let r in data.field) {
            renyuan.push(data.field[r]); //属性

        }

        var ry = JSON.stringify(renyuan);
        parent.layer.getChildFrame("#demo").val(ry);

        var req = {
            uid: renyuan.toString()
        };

        $api.Addrenyuan(req,function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            if (data = "success"){
                layer.msg("选择人员成功！", {time: 1000}, function () {
                    var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                    parent.layer.close(index);
                });
            }
        });

        return false;
    })

});



