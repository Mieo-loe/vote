var index = 1;
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
        $api = layui.$api;
    upload = layui.upload;


    var orgId;
    var orgName;
    var roleIdList = new Array();//所有的角色id列表

    /**
     * 页面初始化
     * */
    function init() {
        //初始化机构树
        initOrgTree();
        //加载角色列表
        loadRoleList();
        uploadImg('#test2');

    }

    init();

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
    // function renderTree(id, nodes) {
    //     //绘制前先清空
    //     $(id).empty();
    //
    //     //绘制
    //     layui.tree({
    //         elem: id
    //         , nodes: nodes
    //         , click: function (node) {//显示组织机构数据
    //             console.log(node); //node即为当前点击的节点数据
    //             orgId = node.id;//保存机构id
    //             orgName = node.name;
    //         }
    //     });
    // }

    function init2() {
        //初始化模板信息
        initModelfo();
    }
    init2();

    /**
     * 初始化菜单信息
     * */
    function initModelfo() {
        var queryArgs = $tool.getQueryParam();//获取查询参数
        var mid = queryArgs['mid'];
        var url = $tool.getContext()+'ModelHistory/get.do';
        var req = {
            mid:mid
        };

        $api.GetModel_Use(req,function (res) {
            console.log(res);
            var data = res.data;
            alert(JSON.stringify(data));
            $("[name='title']").val(data.title);
            $("[name='votingInstruction']").val(data.votingInstruction);
            $("[name='votedNum']").val(data.votedNum);
            for(var i = 0;i<res.data.list.length;i++){
                var zbz = '';
                for(var j =0;j<res.data.list[i].answerList.length;j++){
                    var h = j+1;
                    zbz += '<div class="layui-form-item">\n' +
                        '        <label class="layui-form-label">子标准'+h+'</label>\n' +
                        '        <div class="layui-input-block">\n' +
                        '            <input type="text" class="layui-input"  name="answer" value="'+res.data.list[i].answerList[j].answer+'" placeholder="选项答案">\n' +
                        '        </div>\n' +
                        '    </div>';
                }
                var isCheck = '';
                if (res.data.list[i].optionRule==118){
                var isCheck =  '        <div  class="layui-input-block">\n' +
                    '            <label class="layui-form-label">选项规则</label>\n' +
                    '            <input type="radio" class="layui-input"  name="optionRule'+i+'" value="单选" title="单选" checked="checked">\n' +
                    '            <input type="radio" class="layui-input"  name="optionRule'+i+'" value="多选" title="多选">\n' +
                    '    </div>' ;
                }else{
                    var isCheck =  '        <div  class="layui-input-block">\n' +
                        '            <label class="layui-form-label">选项规则</label>\n' +
                        '            <input type="radio" class="layui-input"  name="optionRule'+i+'" value="单选" title="单选" >\n' +
                        '            <input type="radio" class="layui-input"  name="optionRule'+i+'" value="多选" title="多选" checked="checked">\n' +
                        '    </div>' ;
                }
                var contentdemo='';

                if(res.data.list[i].isChar==51){
                    var Imgs = '';
                    for (var x =0 ;x<res.data.list[i].contentTest.length;x++) {
                        Imgs+=' <img style="width: 200px;height: 200px" src="'+res.data.list[i].contentTest[x].content+'" class="layui-upload-img">';
                    }
                    contentdemo +=  ' <div class="layui-form-item">\n' +
                    '        <label class="layui-form-label">题目'+(i+1)+'</label>\n' +
                    '        <div class="layui-input-block">\n' +
                    '            <input type="text" class="layui-input" name="content" placeholder="请输入题目">\n' +
                    '        </div>\n' +
                    '        </div>\n' +
                    '        <div class="layui-upload">\n' +
                    '            <button type="button" class="layui-btn" id="test2'+index+'" data-id="demo2'+index+'">多图片上传</button>\n' +
                    '            <blockquote class="layui-elem-quote layui-quote-nm" style="margin-top: 10px;">\n' +
                    '                预览图：\n' +
                    '                <div class="layui-upload-list" id="demo2'+index+'">'+Imgs+'</div>\n' +
                    '            </blockquote>\n' +
                    '        </div>'
                }else {
                    for (var x = 0; x < res.data.list[i].contentTest.length; x++) {
                        contentdemo += ' <div class="layui-form-item">\n' +
                            '        <label class="layui-form-label">题目' + (i+1) + '</label>\n' +
                            '        <div class="layui-input-block">\n' +
                            '            <input type="text" class="layui-input" name="content" value="'+ res.data.list[i].contentTest[x].content +'" placeholder="请输入题目">\n' +
                            '        </div>\n' +
                            '        </div>\n' +
                            '        <div class="layui-upload">\n' +
                            '            <button type="button" class="layui-btn" id="test2' + index + '" data-id="demo2' + index + '">多图片上传</button>\n' +
                            '            <blockquote class="layui-elem-quote layui-quote-nm" style="margin-top: 10px;">\n' +
                            '                预览图：\n' +
                            '                <div class="layui-upload-list" id="demo2' + index + '"></div>\n' +
                            '            </blockquote>\n' +
                            '        </div>'
                    }

                }
                var bz = '<div id="add">\n' +
                    contentdemo+
                    isCheck+
                    '    <div class="father">\n' +
                    zbz +
                    '    </div>\n' +
                    '    <button type="button" id="append" class="layui-btn layui-btn-primary" onclick="zAppend($(this));">添加子标准</button>\n' +
                    '    </div>'


                $('#gradfather').append(bz);
                index++;
            }
            form.render('radio');//重新绘制表单，让修改生效
        });
    }

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

                    // console.log("123");
                    $('#' + $(target).attr('data-id')).empty();

            }
            ,done: function(res){
                console.log("http://localhost:8080"+res.data);
                $('#'+$(target).attr("data-id")).append('<img style="width: 200px;height: 200px" src="'+ 'http://localhost:8080'+res.data +'" class="layui-upload-img">')
                //上传完毕
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

    /**
     * 表单提交
     *
     // *var data = {a:a,b:b,c:c,bz_jihe:bz_jihe}; */
    form.on("submit(addVote)", function (data) {

        var title = data.field.title;
        var votingInstruction = data.field.votingInstruction;
        var votedNum = data.field.votedNum;
        var tm_list=[];
        //生成8位随机序列号
        var accounts = [];
        for (var z = 0; z < votedNum; z++){
            var account = "";
            var data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            for (var i = 0; i < 8; i++) {
                var r = parseInt(Math.random() * 61);
                account += data[r];
            }
            var aaa = {content:account}
            accounts.push(aaa);
        }
        var acs = {
            accounts:accounts
        };
        var acs = JSON.stringify(acs);//在js中把对象转为JSON字符串的语法
        window.sessionStorage.setItem("acs", acs);//存入域，把序列号传给显示序列号的页面
        // var tid = data.field.tid;
        // var optionRule = data.field.optionRule;
        // var answer = data.field.answer;
        // var idList = new Array();
        var tit = $("#gradfather").children("div");
        for (var i = 0; i < tit.length; i++) {
            var d = $($($($(tit[i]).children(".layui-form-item")[0]).children(".layui-input-block")[0]).children("input")[0]).val();
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
                rule = 118;
            }else {
                rule = 119;
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
            var mmm ={title:title,votingInstruction:votingInstruction,votedNum:votedNum,accounts:accounts,list:tm_list};
            // console.log(mmm);


        }
        // alert(JSON.stringify(mmm));

        $api.AddVote(JSON.stringify(mmm),{contentType:"application/json;charset=UTF-8"},function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            layer.msg("发布添加成功！", {time: 1000}, function () {
                // layer.closeAll("iframe");
                var index = layui.layer.open({
                    title: "发布成功",
                    type: 2,
                    content: "account.html",
                    success: function (layero, index) {
                        setTimeout(function () {
                            layui.layer.tips('点击此处返回', '.layui-layer-setwin .layui-layer-close', {
                                tips: 3
                            });
                        }, 500)
                    }
                });
                //改变窗口大小时，重置弹窗的高度，防止超出可视区域（如F12调出debug的操作）
                $(window).resize(function () {
                    layui.layer.full(index);
                });
                layui.layer.full(index);
            });
        });

        return false;
    })
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
                    rule = 118;
                }else {
                    rule = 119;
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
                rule = 118;
            }else {
                rule = 119;
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
