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

    var uids = new Array();
    var uid = new Array();
    // var yxxuid = new Array();
    var xzry = new Array();
    var xzrenyuan = new Array();

    /**
     * 页面初始化
     * */
    function init() {
        //初始化下拉框
        initUid();
        initUidInfo();
    }

    init();

    /**
     * 初始化界面
     */
    function initUidInfo(){
        var queryArgs = $tool.getQueryParam();
        uids = queryArgs['uid'];
        xzry = queryArgs['renyuan'];

        // $api.LoadRY(null,function (res) {
        //     yxxuid = res.data;
        // });

        for (var a=0; a<uids.length; a++){
            if (/^\d+$/.test(uids[a])){
                uid.push(uids[a]);
            }
        }
        for (var a=0; a<xzry.length; a++){
            if (/^\d+$/.test(xzry[a])){
                xzrenyuan.push(xzry[a]);
            }
        }

    }

    /**
     * 添加复选框并设置状态
     * */
    function initUid() {

        $api.GetUid(null,function (res) {
            var data = res.data;
            if (data.length > 0) {
                var html = '';
                var j = 0;
                for (var i = 0; i < data.length; i++) {
                    if (xzrenyuan.length == 0) {
                        if(data[i].uid == uid[j]){
                            html += '<input type="checkbox" checked name="' + data[i].uid + '" title="' + data[i].uname + '" value="' + data[i].uid + '"/>';
                            j++;
                        } else {
                            html += '<input type="checkbox" name="' + data[i].uid + '" title="' + data[i].uname + '" value="' + data[i].uid + '"/>';
                        }
                    } else {
                        if(data[i].uid == xzrenyuan[j]){
                            html += '<input type="checkbox" checked name="' + data[i].uid + '" title="' + data[i].uname + '" value="' + data[i].uid + '"/>';
                            j++;
                        } else {
                            html += '<input type="checkbox" name="' + data[i].uid + '" title="' + data[i].uname + '" value="' + data[i].uid + '"/>';
                        }
                    }
                }
                $('#adduid').append($(html));
                form.render();
            }
        });
    }

    /**
     * 表单提交
     * */
    form.on("submit(editry)", function (data) {

        var ry = new Array();
        for (let i in data.field) {
            ry.push(data.field[i]); //属性
        }

        var renyuan = JSON.stringify(ry);
        parent.layer.getChildFrame("#demo").val(renyuan);

        var req = {
            uid: ry.toString()
        };

        $api.Addrenyuan(req,function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            if (data = "success"){
                layer.msg("成功选中人员！", {time: 1000}, function () {
                    // $api.LoadRY(null,function (res) {
                    //     yxxuid = res.data;
                    // });
                    var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                    parent.layer.close(index);
                });
            }
        });

        return false;
    })

});


