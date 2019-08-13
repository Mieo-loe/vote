layui.config({
    base: $config.resUrl+'layuicms/common/js/'//定义基目录
}).extend({
    ajaxExtention:'ajaxExtention',//加载自定义扩展，每个业务js都需要加载这个ajax扩展
    $tool:'tool',
    $api:'api'
}).use(['form', 'layer', 'jquery','ajaxExtention','$tool','$api'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        laypage = layui.laypage,
        $ = layui.jquery,
        $tool = layui.$tool,
        $api = layui.$api;

    /**
     * 表单提交
     * */

    form.on("submit(adddemo)", function (data) {
        var bigTitle = data.field.bigTitle;
        var explain = data.field.explain;
        var number = data.field.number;
        layer.prompt({title: '请输入模板标题',value:bigTitle,formType: 0}, function(templateTitle, index){
            var templateTitle=templateTitle;
        var a = $("#zbt_coll").children();
        var zbt_coll = [];

        for (var i = 0; i < a.length; i++) {
            //子标题
            var subtitleContent = $($($($(a[i]).children(".layui-form-item")[0]).children(".layui-input-block")[0]).children("input")[0]).val();
            var e = $($(a[i]).children("#bz_collection")).children();
            var bz_coll = [];//标准数组
            for (var j = 0; j < e.length; j++) {
                //标准
                var standardName = $($($($(e[j]).children(".layui-form-item")[0]).children(".layui-input-block")[0]).children("input")[0]).val();
                //选项
                var optionRule = $($($($(e[j]).children(".layui-form-item")[1]).children(".layui-input-block")[0]).children("input")[0]).is(":checked");
                var id;
                if (optionRule) {
                    id = 78;
                } else {
                    id = 79;
                }

                //子标准
                var f = $(e[j]).children("#zbz").children();
                var zbz_coll = [];//子标准数组
                for (var k = 0; k < f.length; k++) {
                    var substandardName = $($($(f[k]).children(".layui-input-block")[0]).children("input")[0]).val();
                    zbz_coll.push({substandardName:substandardName});//获取子标准数据推入子标准数组中，由内到外
                }
                //获取标准底下数据放入bz_coll下
                var bz_obj = {standardName: standardName, optionRule: id, tpSubstandardList: zbz_coll};//对象
                bz_coll.push(bz_obj);
            }
            //获取子标题底下数据放入zbt_coll下
            var zbt_obj = {subtitleContent: subtitleContent, tpStandardList: bz_coll,};
            zbt_coll.push(zbt_obj);
        }
        var data = {bigTitle: bigTitle, explain: explain, number: number,tpSubtitleContentList:zbt_coll};
       /* alert(JSON.stringify(data));//转成json对象*/




        $api.AddTemplate(JSON.stringify(data),{contentType:"application/json;charset=UTF-8"},function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            layer.msg("角色添加成功！",{time:1000},function () {
                 layer.closeAll("iframe");
                // 刷新父页面
                 parent.location.reload();
            });
        });
        });
        return false;
    })

});