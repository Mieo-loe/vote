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
    var index=0;
    function init() {
        var queryArgs = $tool.getQueryParam();//获取查询参数
        var templateId = parseInt(queryArgs['templateId']);
        var req = {
            templateId:templateId
        };
        $api.UseTemplate(req,function (res) {
            var data = res.data;
            console.log(data);
            $("[name='bigTitle']").val(data.bigTitle);
            $("[name='explain']").val(data.explain);
            $("[name='number']").val(data.number);

            for(var i=0;i<data.tpSubtitleContentList.length;i++){
                var zbt='';
                var bz='';


                for(var j=0;j<data.tpSubtitleContentList[i].bz_coll.length;j++){
                    var zbz = '';
                    for(var z=0;z<data.tpSubtitleContentList[i].bz_coll[j].zbz_coll.length;z++){
                        var zbz_index=z+1;
                        zbz+=' <div class="layui-form-item ">\n' +
                            '                <label class="layui-form-label">子标准'+zbz_index+'</label>\n' +
                            '                <div class="layui-input-block">\n' +
                            '                    <input type="text" class="layui-input" name="substandardName" value="'+res.data.list[i].bz_coll[j].zbz_coll[z].substandardName+'" lay-verify="required" placeholder="请输入角色名称">\n' +
                            '                </div>'+
                            '</div>'
                    }
                    var id;
                    alert(res.data.tpSubtitleContentList[i].bz_coll[j].id);
                    if(res.data.tpSubtitleContentList[i].bz_coll[j].id===78){
                        id=  '<div class="layui-form-item">'+
                            "<div class=\"layui-input-block\">\n"+
                            '<label class="layui-form-label">选项规则</label>\n'+
                            '<input type="radio" class="layui-input" name="id'+ index+'"'+ 'value="'+res.data.list[i].bz_coll[j].id+'" title="单选" checked="checked">' +
                            '<div class=\"layui-unselect layui-form-radio\"><i class=\"layui-anim layui-icon\"></i><span>单选</span></div>\n'+
                            '<input type="radio" class="layui-input" name="id'+index+ '"'+ ' value="'+res.data.list[i].bz_coll[j].id+'" title="多选">' +
                            '<div class=\"layui-unselect layui-form-radio layui-form-radioed\"><i class=\"layui-anim layui-icon\"></i><span>多选</span></div>\n'+
                            "    </div>\n" +
                            "   </div>"
                    }else{
                        id= '<div class="layui-form-item">'+
                            "<div class=\"layui-input-block\">\n"+
                            '<label class="layui-form-label">选项规则</label>\n'+
                            '<input type="radio" class="layui-input" name="id'+ index+'"'+ 'value="'+res.data.list[i].bz_coll[j].id+'" title="单选" >' +
                            '<div class=\"layui-unselect layui-form-radio\"><i class=\"layui-anim layui-icon\"></i><span>单选</span></div>\n'+
                            '<input type="radio" class="layui-input" name="id'+index+ '"'+ ' value="'+res.data.list[i].bz_coll[j].id+'" title="多选" checked="checked">' +
                            '<div class=\"layui-unselect layui-form-radio layui-form-radioed\"><i class=\"layui-anim layui-icon\"></i><span>多选</span></div>\n'+
                            "    </div>\n" +
                            "   </div>"
                    }
                    var bz_index=j+1;
                    bz+='<div id="bz">\n' +
                        '        <div class="layui-form-item ">\n' +
                        '            <label class="layui-form-label">标准'+bz_index+'</label>\n' +
                        '            <div class="layui-input-block">\n' +
                        '                <input type="text" class="layui-input" name="standardName" value="'+res.data.list[i].bz_coll[j].standardName+'" lay-verify="required" placeholder="请输入角色名称">\n' +
                        '            </div>\n' +
                        '        </div>\n' +
                        id+
                        '            <div id="zbz">\n' +
                        zbz+
                        '        </div>\n' +
                        '            <button type="button" class="layui-btn layui-btn-primary" onclick="tianjia($(this))">添加子标准</button>\n' +
                        '        </div>'
                    index++;
                    layui.form.render("radio");


                }
                var zbt_index=i+1;
                zbt+= ' <div id="zbt">\n' +
                    '    <div class="layui-form-item">\n' +
                    '        <label class="layui-form-label">子标题'+zbt_index+'</label>\n' +
                    '        <div class="layui-input-block">\n' +
                    '            <input type="text" class="layui-input" name="subtitleContent" value="'+res.data.list[i].subtitleContent+'" lay-verify="required" placeholder="请输入角色名称">\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '    <div id="bz_collection">\n' +
                    bz+
                    '    </div>\n' +
                    '    <button type="button" class="layui-btn layui-btn-normal" onclick="bz($(this))">新增标准</button>\n' +
                    '    <div class="layui-form-item">\n' +
                    '        <label class="layui-form-label">被评测人员</label>\n' +
                    '        <div class="layui-input-block">\n' +
                    '            <button class="layui-btn" lay-submit="" >选择添加</button>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '    </div>'
                layui.form.render("radio");
                index++;
                $('#zbt_coll').append(zbt);
            }



            form.render();//重新绘制表单，让修改生效
        });
    }
    init();


    /**
     * 表单提交
     * */
    form.on("submit(addtem)", function (data) {
        var bigTitle = data.field.bigTitle;
        var explain = data.field.explain;
        var number = data.field.number;

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
        alert(JSON.stringify(data));//转成json对象




        $api.AddDemoractic(JSON.stringify(data),{contentType:"application/json;charset=UTF-8"},function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            layer.msg("发布成功！",{time:1000},function () {
                layer.closeAll("iframe");
                //刷新父页面
                parent.location.reload();
            });
        });

        return false;
    })
    form.on("submit(cuntem)", function (data) {
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
            alert(JSON.stringify(data));//转成json对象

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

