var renyuan = new Array();

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

    var tmarr = new Array();
    var daarr = new Array();
    var tm = new Array();
    var uid = new Array();

    var templet_Id = null;
    var templet_title = null;


    var uids = new Array();
    var uname = new Array();



    /**
     * 页面初始化
     * */
    function init() {
        //初始化页面
        initUid();
        initMuBanInfo();

    }

    init();

    /**
     * 初始化模板
     */
    function initMuBanInfo() {
        var queryArgs = $tool.getQueryParam();
        var adm_Id = queryArgs['adm_Id'];

        // console.log(adm_Id)
        var req ={
            adm_Id:adm_Id,
        };

        $api.GetTemplet(req,function (res) {
            var data = res.data;

            templet_Id = data.templet_Id;
            templet_title = data.templet_title;
            $("[name='title']").val(data.title);
            $("[name='explains']").val(data.explains);
            $("[name='peonum']").val(data.peonum);
            tmarr = data.tmarr;
            daarr = data.daarr;
            tm = data.tm;
            uid = data.uid;

            loadTM(tm, tmarr, daarr);
            form.render();//重新绘制表单，让修改生效
        });
    }
    
    /**
     * 初始化
     * */
    function initUid() {
        $api.GetUid(null,function (res) {
            var data = res.data;
            uname = data;
            if (data.length > 0) {
                var html = '';
                for (var i = 0; i < data.length; i++) {
                    html += '<input type="checkbox" name="' + data[i].uid + '" title="' + data[i].uname + '" value="' + data[i].uid + '"/>';
                }
                $('#adduid').append($(html));
                form.render();
            }
        });
    }

    /**
     * 初始化题目
     */
    function loadTM(tm){
        var j = 0;
        var z = 0;
        for (var i = 0; i < tm.length; i++) {
            if (tm[i] == 37) {
                $("#de").prop("checked",true);
                $('.parent-menu1').removeClass('layui-hide');
                $($('.parent-menu1 div input')).each(function () {
                    $($('.parent-menu1 div input')[0]).attr("value",tmarr[j]);
                    $($('.parent-menu1 div input')[1]).attr("value",daarr[z]);
                    $($('.parent-menu1 div input')[2]).attr("value",daarr[z+1]);
                    $($('.parent-menu1 div input')[3]).attr("value",daarr[z+2]);
                    $($('.parent-menu1 div input')[4]).attr("value",daarr[z+3]);
                })
                j++;
                z=z+4;
            } else if (tm[i] == 38) {
                $("#neng").prop("checked",true);
                $('.parent-menu2').removeClass('layui-hide');
                $($('.parent-menu2 div input')).each(function () {
                    $($('.parent-menu2 div input')[0]).attr("value",tmarr[j]);
                    $($('.parent-menu2 div input')[1]).attr("value",daarr[z]);
                    $($('.parent-menu2 div input')[2]).attr("value",daarr[z+1]);
                    $($('.parent-menu2 div input')[3]).attr("value",daarr[z+2]);
                    $($('.parent-menu2 div input')[4]).attr("value",daarr[z+3]);
                })
                j++;
                z=z+4;
            } else if (tm[i] == 39) {
                $("#qing").prop("checked",true);
                $('.parent-menu3').removeClass('layui-hide');
                $($('.parent-menu3 div input')).each(function () {
                    $($('.parent-menu3 div input')[0]).attr("value",tmarr[j]);
                    $($('.parent-menu3 div input')[1]).attr("value",daarr[z]);
                    $($('.parent-menu3 div input')[2]).attr("value",daarr[z+1]);
                    $($('.parent-menu3 div input')[3]).attr("value",daarr[z+2]);
                    $($('.parent-menu3 div input')[4]).attr("value",daarr[z+3]);
                })
                j++;
                z=z+4;
            } else if (tm[i] == 40) {
                $("#ji").prop("checked",true);
                $('.parent-menu4').removeClass('layui-hide');
                $($('.parent-menu4 div input')).each(function () {
                    $($('.parent-menu4 div input')[0]).attr("value",tmarr[j]);
                    $($('.parent-menu4 div input')[1]).attr("value",daarr[z]);
                    $($('.parent-menu4 div input')[2]).attr("value",daarr[z+1]);
                    $($('.parent-menu4 div input')[3]).attr("value",daarr[z+2]);
                    $($('.parent-menu4 div input')[4]).attr("value",daarr[z+3]);
                })
                j++;
                z=z+4;
            } else if (tm[i] == 41) {
                $("#lian").prop("checked",true);
                $('.parent-menu5').removeClass('layui-hide');
                $($('.parent-menu5 div input')).each(function () {
                    $($('.parent-menu5 div input')[0]).attr("value",tmarr[j]);
                    $($('.parent-menu5 div input')[1]).attr("value",daarr[z]);
                    $($('.parent-menu5 div input')[2]).attr("value",daarr[z+1]);
                    $($('.parent-menu5 div input')[3]).attr("value",daarr[z+2]);
                    $($('.parent-menu5 div input')[4]).attr("value",daarr[z+3]);
                })
                j++;
                z=z+4;
            }
        }
    }


    /**
     * 监听checkbox选择
     * */
    form.on('checkbox(menuTypeFilter1)', function (data) {
        if (true === $("#de").prop("checked")) {//二级菜单
            $('.parent-menu1').removeClass('layui-hide');
            $('.parent-menu1 .layui-input').attr("lay-verify", "required");
        }else{
            $('.parent-menu1').addClass('layui-hide');
            $('.parent-menu1 .layui-input').attr("lay-verify", "");
        }
    });
    form.on('checkbox(menuTypeFilter2)', function (data) {
        if (true === $("#neng").prop("checked")) {//二级菜单
            $('.parent-menu2').removeClass('layui-hide');
            $('.parent-menu2 .layui-input').attr("lay-verify", "required");
        }else{
            $('.parent-menu2').addClass('layui-hide');
            $('.parent-menu2 .layui-input').attr("lay-verify", "");
        }
    });
    form.on('checkbox(menuTypeFilter3)', function (data) {
        if (true === $("#qing").prop("checked")) {//二级菜单
            $('.parent-menu3').removeClass('layui-hide');
            $('.parent-menu3 .layui-input').attr("lay-verify", "required");
        }else{
            $('.parent-menu3').addClass('layui-hide');
            $('.parent-menu3 .layui-input').attr("lay-verify", "");
        }
    });
    form.on('checkbox(menuTypeFilter4)', function (data) {
        if (true === $("#ji").prop("checked")) {//二级菜单
            $('.parent-menu4').removeClass('layui-hide');
            $('.parent-menu4 .layui-input').attr("lay-verify", "required");
        }else{
            $('.parent-menu4').addClass('layui-hide');
            $('.parent-menu4 .layui-input').attr("lay-verify", "");
        }
    });
    form.on('checkbox(menuTypeFilter5)', function (data) {
        if (true === $("#lian").prop("checked")) {//二级菜单
            $('.parent-menu5').removeClass('layui-hide');
            $('.parent-menu5 .layui-input').attr("lay-verify", "required");
        }else{
            $('.parent-menu5').addClass('layui-hide');
            $('.parent-menu5 .layui-input').attr("lay-verify", "");
        }
    });


    /**
     * 保存
     * */
    form.on("submit(addmuban)", function (data) {

        var title = data.field.title;
        var explains = data.field.explains;
        var peonum = data.field.peonum
        var i = 0;
        var sum = 0;
        var a = 0;


        var tmarr = new Array();
        var daarr = new Array();
        var tm = new Array();

        var timufs = $("[name = 'fraction']");
        var daanfs = $("[name = 'price']");

        timufs.each(function(index,item){
            if ($(item).val() != "") {
                tmarr.push($(item).val());
            }
        });

        daanfs.each(function(index,item){
            if ($(item).val() != "") {
                daarr.push($(item).val());
            }
        });

        if($("#de").prop("checked")){
            var de = 37;
            // console.log(de);
            tm.push(de);
        }
        if($("#neng").prop("checked")){
            var neng = 38;
            // console.log(neng);
            tm.push(neng)
        }
        if($("#qing").prop("checked")){
            var qing = 39;
            // console.log(qing);
            tm.push(qing)
        }
        if($("#ji").prop("checked")){
            var ji = 40;
            // console.log(ji);
            tm.push(ji)
        }
        if($("#lian").prop("checked")){
            var lian = 41;
            // console.log(lian);
            tm.push(lian)
        }

        //请求
        timufs.each(function(index,item){
            if ($(item).val() != "") {
                i = parseInt($(item).val());
                sum += i ;
            }
        });
        layer.prompt({title: '请输入你的模板标题，并确认', formType: 2, value: templet_title}, function(templet_title1, index){
            layer.msg('您的模板标题是'+templet_title1);

            if (sum != 100 || sum > 100) {
                layer.msg("需要总分为100!请重新调整分值", {time: 1000});
            } else {
                for (var b=0;b<tmarr.length;b++){
                    if(tmarr[b]-daarr[a]>=0){
                        if(parseInt(daarr[a])>parseInt(daarr[a+1])&&parseInt(daarr[a+1])>parseInt(daarr[a+2])&&parseInt(daarr[a+2])>parseInt(daarr[a+3])){
                            a=a+4;
                        }else {
                            layer.msg("需要各项分值合理!请重新调整分值", {time: 1000});
                            a=0;
                        }
                    }
                }
                if (a == (tmarr.length)*4) {
                    var req = {
                        templet_Id:templet_Id,
                        title:title,
                        explains:explains,
                        peonum:peonum,
                        tmarr:tmarr.toString(),
                        daarr:daarr.toString(),
                        tm:tm.toString(),
                        templet_title: templet_title1,

                    };

                    $.post($tool.getContext() + 'pingce/bcmuban.do',req, function (data) {
                        if(data = "success"){
                            layer.msg("已经存为模板了！", {time: 1000}, function () {
                                layer.closeAll("iframe");
                                //刷新父页面
                                parent.location.reload();
                            });
                        }
                    },"json")
                } else {
                    layer.msg("需要各项分值合理!请重新调整分值", {time: 1000});
                }
            }
        });


        return false;
    })

    $("#addry").click(function () {
        console.log(renyuan);
        layer.open({
            type: 2,
            title: '选择人员',
            area : ['400px' , '300px'],
            content: '../../../page/system/Grade_adm/editUser.html?uid='+uid+'&renyuan='+renyuan,
            end:function () {
                var obj = $("#demo").val();
                renyuan = JSON.parse(obj)

                if (renyuan.length > 0) {
                    var html = '<h3>选中的人员:</h3>';
                    var j = 0;
                    for (var i = 0; i < uname.length; i++) {
                        if (uname[i].uid == renyuan[j]) {
                            html += '<h3>'+uname[i].uname+'</h3>';
                            j++;
                        }
                    }
                    $('#renyuan').html("");
                    $('#renyuan').append($(html));
                } else {
                    $('#renyuan').html("");
                }
            }
        });
    });

    /**
     * 表单发布
     * */
    form.on("submit(addDfmuban)", function (data) {
        // console.log(uid)
        var title = data.field.title;
        var explains = data.field.explains;
        var peonum = data.field.peonum
        var i = 0;
        var sum = 0;
        var a = 0;

        var tmarr = new Array();
        var daarr = new Array();
        var tm = new Array();

        var timufs = $("[name = 'fraction']");
        var daanfs = $("[name = 'price']");

        timufs.each(function(index,item){
            if ($(item).val() != "") {
                tmarr.push($(item).val());
            }
        });

        daanfs.each(function(index,item){
            if ($(item).val() != "") {
                daarr.push($(item).val());
            }
        });

        if($("#de").prop("checked")){
            var de = 37;
            // console.log(de);
            tm.push(de);
        }
        if($("#neng").prop("checked")){
            var neng = 38;
            // console.log(neng);
            tm.push(neng)
        }
        if($("#qing").prop("checked")){
            var qing = 39;
            // console.log(qing);
            tm.push(qing)
        }
        if($("#ji").prop("checked")){
            var ji = 40;
            // console.log(ji);
            tm.push(ji)
        }
        if($("#lian").prop("checked")){
            var lian = 41;
            // console.log(lian);
            tm.push(lian)
        }

        //请求
        timufs.each(function(index,item){
            if ($(item).val() != "") {
                i = parseInt($(item).val());
                sum += i ;
            }
        });

        if (sum != 100 || sum > 100) {
                    layer.msg("需要总分为100!请重新调整分值", {time: 1000});
            } else {
                for (var b=0;b<tmarr.length;b++){
                    if(tmarr[b]-daarr[a]>=0){
                        if(parseInt(daarr[a])>parseInt(daarr[a+1])&&parseInt(daarr[a+1])>parseInt(daarr[a+2])&&parseInt(daarr[a+2])>parseInt(daarr[a+3])){
                            a=a+4;
                        }else {
                            layer.msg("需要各项分值合理!请重新调整分值", {time: 1000});
                            a=0;
                        }
                    }
                }
                if (a == (tmarr.length)*4) {
                    var req = {
                        title:title,
                        explains:explains,
                        peonum:peonum,
                        tmarr:tmarr.toString(),
                        daarr:daarr.toString(),
                        tm:tm.toString(),
                    };

                    $api.AddDaFen(req,function (data) {
                        if(data = "success"){
                            layer.msg("发布成功！", {time: 1000}, function () {
                                layer.closeAll("iframe");
                                //刷新父页面
                                parent.location.reload();
                            });
                        }
                    });
                } else {
                    layer.msg("需要各项分值合理!请重新调整分值", {time: 1000});
                }
            }

        return false;
    })

    /**
     * 预览
     */
    form.on("submit(yulan)", function (data) {
        var title = data.field.title;
        var explains = data.field.explains;
        var peonum = data.field.peonum
        var i = 0;
        var sum = 0;
        var a = 0;

        var tmarr = new Array();
        var daarr = new Array();
        var tm = new Array();

        var timufs = $("[name = 'fraction']");
        var daanfs = $("[name = 'price']");

        timufs.each(function(index,item){
            if ($(item).val() != "") {
                tmarr.push($(item).val());
            }
        });

        daanfs.each(function(index,item){
            if ($(item).val() != "") {
                daarr.push($(item).val());
            }
        });

        if($("#de").prop("checked")){
            var de = 37;
            // console.log(de);
            tm.push(de);
        }
        if($("#neng").prop("checked")){
            var neng = 38;
            // console.log(neng);
            tm.push(neng)
        }
        if($("#qing").prop("checked")){
            var qing = 39;
            // console.log(qing);
            tm.push(qing)
        }
        if($("#ji").prop("checked")){
            var ji = 40;
            // console.log(ji);
            tm.push(ji)
        }
        if($("#lian").prop("checked")){
            var lian = 41;
            // console.log(lian);
            tm.push(lian)
        }

        //请求
        timufs.each(function(index,item){
            if ($(item).val() != "") {
                i = parseInt($(item).val());
                sum += i ;
            }
        });


        if (sum != 100 || sum > 100) {
            layer.msg("需要总分为100!请重新调整分值", {time: 1000});
        } else {
            for (var b=0;b<tmarr.length;b++){

                if( tmarr[b]-daarr[a]>=0 ){
                    if(parseInt(daarr[a])>parseInt(daarr[a+1])&&parseInt(daarr[a+1])>parseInt(daarr[a+2])&&parseInt(daarr[a+2])>parseInt(daarr[a+3])){
                        a=a+4;
                    }
                }else {
                    a=0;
                }
            }
            if (a == (tmarr.length)*4) {
                var req = {
                    title:title,
                    explains:explains,
                    peonum:peonum,
                    tmarr:tmarr,
                    daarr:daarr,
                    tm:tm,
                    renyuan:renyuan,
                };

                layer.open({
                    title: "预览",
                    type: 2,
                    area : ['1000px' , '600px'],
                    content: "../../../page/system/Grade_adm/DaFenBiao2.html?title="+encodeURIComponent(title)+"&explains="+encodeURIComponent(explains)+"&tmarr="+tmarr.toString()+"&daarr="+daarr.toString()+"&tm="+tm.toString()+"&renyuan="+renyuan.toString(),
                });

            } else {
                layer.msg("需要各项分值合理!请重新调整分值", {time: 1000});
            }
        }
        return false;
    });

});


