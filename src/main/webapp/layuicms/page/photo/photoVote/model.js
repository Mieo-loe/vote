layui.config({
    base: $config.resUrl+'layuicms/common/js/'//定义基目录
}).extend({
    ajaxExtention: 'ajaxExtention',//加载自定义扩展，每个业务js都需要加载这个ajax扩展
    $tool: 'tool',
    $api:'api'
}).use(['form', 'layer', 'tree','$api', 'jquery', 'ajaxExtention', '$tool','upload'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        laypage = layui.laypage,
        $ = layui.jquery,
        $tool = layui.$tool,
        $api = layui.$api,
        upload = layui.upload;

    var orgId;
    var orgName;
    var roleIdList = new Array();//所有的角色id列表

    /**
     * 页面初始化
     * */
    function init2() {
        //初始化机构树
        initOrgTree();
        //加载角色列表
        loadRoleList();
        uploadImg('#test2')
    }

    init2();

    /**
     * 初始化组织机构树
     * */
    function initOrgTree() {
        //获取所有组织机构树

        $api.GetAllOrg(null,function (res) {
            renderTree('#org-tree', res.data);
        });

    }

    /**
     * 绘制树
     * @param id dom id
     * @param nodes 树节点数据
     * */
    function renderTree(id, nodes) {
        //绘制前先清空
        $(id).empty();

        //绘制
        layui.tree({
            elem: id
            , nodes: nodes
            , click: function (node) {//显示组织机构数据
                console.log(node); //node即为当前点击的节点数据
                orgId = node.id;//保存机构id
                orgName = node.name;
            }
        });
    }

    /**
     * 加载角色列表
     * */
    function loadRoleList() {
        var req = {
            page: 1,
            limit: 999
        };
        //发布

        $api.GetRoleList(req,function (res) {
            var data = res.data;
            if (data.length > 0) {
                var roleHtml = "";
                for (var i = 0; i < data.length; i++) {
                    roleHtml += '<input type="checkbox" name="' + data[i].id + '" title="' + data[i].roleName + '">';
                    roleIdList.push(data[i].id);//保存id列表
                }

                $('.role-check-list').append($(roleHtml));
                form.render();//重新绘制表单，让修改生效
            }
        });
    }

    // function huoqu() {
    //
    //     var a = $("#title1 input").val();//标题
    //     var b = $("#title2 input").val();//投票说明
    //     var c = $("#title3 input").val();//投票人数
    //     var title = $("#gradfather").children("div");
    //     var bz_jihe = [];
    //     for (var i = 0; i < title.length; i++) {
    //
    //         var d = $($($($(title[i]).children(".layui-form-item")[0]).children("div")[0]).children("input")[0]).val();
    //         //题目
    //
    //
    //         var choose = $($($(title[i]).children(".layui-input-block")[0]).children("input")[0]).is(":checked");
    //         //选项规则
    //         // alert(choose);
    //         var die = $($(title[i]).children(".father")[0]);
    //         var answer = die.children(".layui-form-item");
    //         var zbz_jihe = [];
    //         for (var j = 0; j < answer.length; j++) {
    //             var e = $($($(answer[j]).children(".layui-input-block")[0]).children("input")[0]).val();
    //             //子标准 答案
    //             // alert(e);
    //             zbz_jihe.push(e);
    //         }
    //         var bz_obj = {d: d, choose: choose, zbz_jihe: zbz_jihe};
    //         bz_jihe.push(bz_obj);
    //     }
    //     var data = {a: a, b: b, c: c, bz_jihe: bz_jihe};
    //
    //     alert(JSON.stringify(data));
    //     // console.log(a,b,c);
    //     // $($($($("#father").children(".layui-form-item")[0]).children(".layui-input-block")[0]).children("input")[0]).val();//取子标准
    //
    //     // $.ajax({
    //     //     data:1,
    //     //     type : 'POST',
    //     //     url : $tool.getContext() +'Vote/voteadd.do/',//（1）请求的action路径,可以传递参数到后台
    //     //     error : function() {
    //     //         alert('请求失败 ');
    //     //     },
    //     //     success : function(data) {
    //     //         alert(data);
    //     //     }
    //     //
    //     // });
    // }
    var index = 2;
    // var maxfile=2;
    // var items = [2];//表示每一题最大选项


    $(".appendmore").click(function () {
        // items[items.length] = 2;
        // if(index >= maxfile)    return;//限制最多maxfile个文件框
        index1=index++;

        var add = "<div class='add'>" +
            ' <div class="layui-form-item">\n' +
            '        <label class="layui-form-label">题目'+index1+'</label>\n' +
            '        <div class="layui-input-block">\n' +
            '            <input type="text" class="layui-input" name="content" placeholder="请输入题目">\n' +
            '        </div>\n' +
            '        </div>\n' +
            '        <div class="layui-upload">\n' +
            '            <button type="button" class="layui-btn" id="test2'+index+'" data-id="demo2'+index+'">多图片上传</button>\n' +
            '            <blockquote class="layui-elem-quote layui-quote-nm" style="margin-top: 10px;">\n' +
            '                预览图：\n' +
            '                <div class="layui-upload-list" id="demo2'+index+'"></div>\n' +
            '            </blockquote>\n' +
            '        </div>'+
            "   <div class=\"layui-input-block\">\n"+
            "   <label class=\"layui-form-label\">选项规则</label>\n"+
            '   <input type="radio" class="layui-input" name="optionRule'+ index1 +'"'+ 'value="单选" title="单选" checked="checked">' +
            '<div class=\"layui-unselect layui-form-radio\"><i class=\"layui-anim layui-icon\"></i><span>单选</span></div>\n'+
            '<input type="radio" class="layui-input" name="optionRule'+index1 + '"'+ ' value="多选" title="多选">' +
            '<div class=\"layui-unselect layui-form-radio layui-form-radioed\"><i class=\"layui-anim layui-icon\"></i><span>多选</span></div>\n'+
            "</div>\n"+
            " <div class=\"father\">\n"+
            "<div class=\"layui-form-item\">\n"+
            "   <label class=\"layui-form-label\">子标准1</label>\n"+
            "   <div class=\"layui-input-block\">\n"+
            "   <input type=\"text\" class=\"layui-input\"  name=\"answer\" placeholder=\"选项答案\">\n"+
            "   </div>\n"+
            "   </div>\n"+
            "   <div class=\"layui-form-item\">\n"+
            "   <label class=\"layui-form-label\">子标准2</label>\n"+
            "   <div class=\"layui-input-block\">\n"+
            "   <input type=\"text\" class=\"layui-input\"  name=\"answer\" placeholder=\"选项答案\">\n"+
            "   </div>\n"+
            "   </div>\n"+
            "   </div>\n"+
            '   <button id="item'+index1 + '"type=\"button\" id=\"append\" class=\"layui-btn layui-btn-primary\" onclick=\"zAppend($(this));\">添加子标准</button></div>'+
            "   </div>\n"
        ;


        $("#appendmore").before(add);
        // console.log("dddd");
        uploadImg("#test2"+index);
        layui.form.render("radio");

    });
    //多图片上传
    function uploadImg(target){
        console.log(123);
        upload.render({
            elem: target
            ,url: $tool.getContext()+'Vote/upload.do'//路径上传
            ,auto: true //选择文件后自动上传
            ,multiple: true,
            before : function () {
                $('#' + $(target).attr('data-id')).empty();
            }
            //     ,before: function(obj){
            //         var files = obj.pushFile();//预读本地文件示例，不支持ie8
            //         obj.preview(function(index, file, result){
            //
            //             //$('#demo2').append('<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img">')
            //             // console.log(index); //得到文件索引
            //             // console.log(file); //得到文件对象
            //             // console.log(result); //得到文件base64编码，比如图片
            //             //layer.load();
            //             // alert(JSON.stringify(photos));
            // });
            //         //var data = $('#demo2').attr('src', result);
            //         //alert(data);
            //     }
            ,done: function(res){
                console.log("http://localhost:8080"+res.data);
                $('#'+$(target).attr("data-id")).append('<img style="width: 200px;height: 200px" src="'+ 'http://localhost:8080'+res.data +'" class="layui-upload-img">')
                //上传完毕
            }
        });
    }
    /**
     * 表单提交:保存
     *
     // *var data = {a:a,b:b,c:c,bz_jihe:bz_jihe}; */
    form.on("submit(addModel)", function (data) {
        var layer_title = data.field.title;

        layer.prompt({title: '请输入模板标题',value:layer_title,formType: 0}, function(modelTitle, index){
                // layer.close(index);
                layer.msg('您输入模板标题为：'+ modelTitle );
            var modelTitle =modelTitle;
            var title = data.field.title;
            var votingInstruction = data.field.votingInstruction;
            var votedNum = data.field.votedNum;
            var tm_list=[];
            // var tid = data.field.tid;
            // var optionRule = data.field.optionRule;
            // var answer = data.field.answer;
            // var idList = new Array();
            var tit = $("#gradfather").children("div");
            for (var i = 0; i < tit.length; i++) {
                var d = $($($($(tit[i]).children(".layui-form-item")[0]).children(".layui-input-block")[0]).children("input")[0]).val();
                // alert(d);
                //获取图片路径 后台上传至文件夹（利用两个头一个流）
                var contentTest = [];
                var IsChar;
                if (d==""){
                    console.log(123);
                    for (var c=0;c<$($($($(tit[i]).children(".layui-upload")[0]).children("blockquote")[0]).children("div")[0]).children("img").length;c++){
                        var ph = $($($($($(tit[i]).children(".layui-upload")[0]).children("blockquote")[0]).children("div")[0]).children("img")[c]).attr("src");
                        var imgContent = {content:ph};
                        contentTest.push(imgContent);
                        IsChar=51;
                        // alert(123);
                    }
                }else {
                    var charContent = {content:d};
                    contentTest.push(charContent);
                    IsChar=50;
                }

                var e = $($(tit[i]).children(".layui-input-block")[0]);
                var isChecked = $(e.children(".layui-input")[0]).is(":checked");
                var rule ;
                if(isChecked){
                    rule = 78;
                }else {
                    rule = 79;
                }
                // alert(isChecked);
                // for (var j = 0; j < e.length; j++) {
                //     var f = $($($(e[j]).children(".layui-input-block")[0]).children(".layui-input")[0]).is(":checked");
                //     alert(f);
                //     list.push(f);
                var answer_list = [];
                var die  = $($(tit[i]).children(".father")[0]);
                var answer = die.children(".layui-form-item");
                for (var k = 0; k < answer.length; k++) {
                    // alert(123)
                    var v = $($($(answer[k]).children(".layui-input-block")[0]).children("input")[0]).val();
                    //alert(v);
                    var answer_Content = {answer:v};
                    answer_list.push(answer_Content);
                    // alert(list);
                    // list.toString();
                }
                var option = {contentTest:contentTest,isChar:IsChar,optionRule:rule,answerList:answer_list};
                tm_list.push(option);
                // }



            }
            var mmm1 ={modelTitle:modelTitle,title:title,votingInstruction:votingInstruction,votedNum:votedNum,list:tm_list};
            console.log(JSON.stringify(tm_list));
            //alert(JSON.stringify(mmm1));
            //console.log(JSON.stringify(mmm1));

            $api.AddModel(JSON.stringify(mmm1),{contentType:"application/json;charset=UTF-8"},function (data) {
                //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
                layer.msg("模板添加成功！", {time: 1000}, function () {
                    layer.closeAll("iframe");
                    //刷新父页面
                    parent.location.reload();
                });
            });
        });
        return false;
    })
    form.on("submit(yulan)", function (data) {
        var title = data.field.title;
        var votingInstruction = data.field.votingInstruction;
        var votedNum = data.field.votedNum;
        var tm_list=[];
        // var tid = data.field.tid;
        // var optionRule = data.field.optionRule;
        // var answer = data.field.answer;
        // var idList = new Array();
        var tit = $("#gradfather").children("div");
        for (var i = 0; i < tit.length; i++) {
            var d = $($($($(tit[i]).children(".layui-form-item")[0]).children(".layui-input-block")[0]).children("input")[0]).val();
            // alert(d);
            var contentTest = [];
            var IsChar;
            if (d==""){

                for (var c=0;c<$($($($(tit[i]).children(".layui-upload")[0]).children("blockquote")[0]).children("div")[0]).children("img").length;c++){
                    var ph = $($($($($(tit[i]).children(".layui-upload")[0]).children("blockquote")[0]).children("div")[0]).children("img")[c]).attr("src");
                    var imgContent = {content:ph};
                    contentTest.push(imgContent);
                    IsChar=51;
                    // alert(123);
                }
            }else {
                var charContent = {content:d};
                contentTest.push(charContent);
                IsChar=50;
            }
            var e = $($(tit[i]).children(".layui-input-block")[0]);
            var isChecked = $(e.children(".layui-input")[0]).is(":checked");
            var rule ;
            if(isChecked){
                rule = 78;
            }else {
                rule = 79;
            }
            // alert(isChecked);
            // for (var j = 0; j < e.length; j++) {
            //     var f = $($($(e[j]).children(".layui-input-block")[0]).children(".layui-input")[0]).is(":checked");
            //     alert(f);
            //     list.push(f);
            var answer_list = [];
            var die  = $($(tit[i]).children(".father")[0]);
            var answer = die.children(".layui-form-item");
            for (var k = 0; k < answer.length; k++) {
                // alert(123)
                var v = $($($(answer[k]).children(".layui-input-block")[0]).children("input")[0]).val();
                //alert(v);
                var answer_Content = {answer:v};
                answer_list.push(answer_Content);
                // alert(list);
                // list.toString();
            }
            var option = {contentTest:contentTest,isChar:IsChar,optionRule:rule,answerList:answer_list};
            tm_list.push(option);
            // }
            var mmm1 ={title:title,votingInstruction:votingInstruction,votedNum:votedNum,list:tm_list};
            // console.log(mmm1);
            var hh = JSON.stringify(mmm1);
            window.sessionStorage.setItem("hhh",hh)
            alert(hh);
            var index = layui.layer.open({
                title: "使用模板",
                type: 2,
                content: "historyPreview.html",
                success: function (layero, index1) {
                    setTimeout(function () {
                        layui.layer.tips('点击此处返回菜单列表', '.layui-layer-setwin .layui-layer-close', {
                            tips: 3
                        });
                        layui.layer.full(index1);
                    })
                }
            });
        }
        return false;
    })

});

