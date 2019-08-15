var index = 1;
var question_Index=0;
layui.config({
    base: $config.resUrl+'layuicms/common/js/'//定义基目录
}).extend({
    ajaxExtention: 'ajaxExtention',//加载自定义扩展，每个业务js都需要加载这个ajax扩展
    $tool: 'tool',
    $api:'api'
}).use(['form', 'layer', 'tree','$api', 'jquery', 'ajaxExtention', '$tool'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        laypage = layui.laypage,
        $ = layui.jquery,
        $tool = layui.$tool,
        $api = layui.$api;

    var orgId;
    var orgName;
    var roleIdList = new Array();//所有的角色id列表

    /**
     * 页面初始化
     * */
    function init() {
        initModelfo();
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
        //initModelfo();
    }
    //init2();
    function radioClick(e) {
        var name = $(e.currentTarget).attr('name');
        var nodes = document.getElementsByName(name);

        for (var i = 0; i < nodes.length; i++) {
            $(nodes[i]).removeClass("bgi");
        }
        $(e.currentTarget).addClass("bgi");
    }
    function checkClick(e) {

        $(e.currentTarget).toggleClass("bgi");
    }
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
            $("[name='title']").val(data.title);
            $("[name='votingInstruction']").val(data.votingInstruction);
            $("[name='votedNum']").val(data.votedNum);
            var question_coll = '';
            for (var i = 0; i < res.data.list.length; i++) {
                var zbz = ' ';
                    var Imgs='';
                    var  question = '';
                    if( res.data.list[i].isChar==50){//文字
                        question+=  '                <div class="question_Title_coll">\n' +
                            '                    <div class="question_Num">'+(i+1)+'</div>\n' +
                            '                    <div class="question_Title" style="width: 726px">\n' +
                            '                        <div class="question_content" style="padding-top: 9px">'+ res.data.list[i].contentTest[0].content+'</div>\n' +
                            '                    </div>\n' +
                            '                </div>' ;
                    }else {//图片
                        for (var x = 0;x < res.data.list[i].contentTest.length; x++){
                        if (res.data.list[i].contentTest.length==1) {
                            Imgs += ' <img  src="' + res.data.list[i].contentTest[x].content + '" class="layui-upload-img">';
                            question =' <div class="question_Title_coll">\n' +
                                '                    <div class="question_Num">1</div>\n' +
                                '                    <div class="question_Title">\n' +
                                '                        <div class="question_img1">\n' +
                                    Imgs+
                                '                            <img class="fangdaJ" src="../../../page/photo/fangda.png">\n' +
                                '                        </div>\n' +
                                '                    </div>\n' +
                                '                </div>';

                        }else if (res.data.list[i].contentTest.length==2||res.data.list[i].contentTest.length==4){
                            Imgs += '<div class="question_img2">\n' +
                                '                            <img class="title_Photo2" src="' + res.data.list[i].contentTest[x].content+'">\n' +
                                '                            <img class="fangdaJ" src="../../../page/photo/fangda.png">\n' +
                                '                        </div>';
                            question =' <div class="question_Title_coll">\n' +
                                '                    <div class="question_Num">'+(i+1)+'</div>\n' +
                                '                    <div class="question_Title">\n' +
                                                        Imgs+
                                '                    </div>\n' +
                                '                </div>';

                        }else {
                            Imgs += '<div class="question_img3">\n' +
                                '                            <img class="title_Photo3" src="' + res.data.list[i].contentTest[x].content + '">\n' +
                                '                            <img class="fangdaJ" src="../../../page/photo/fangda.png">\n' +
                                '                        </div>';
                            question = ' <div class="question_Title_coll">\n' +
                                '                    <div class="question_Num">'+(i+1)+'</div>\n' +
                                '                    <div class="question_Title">\n' +
                                                    Imgs+
                                '                    </div>\n' +
                                '                </div>';
                        }
                    }
                }
                    for(var j =0;j<res.data.list[i].answerList.length;j++){
                        if (res.data.list[i].optionRule==118){
                            zbz +=  '<div class="answer">\n' +
                                '                        <div name="checked' + question_Index + '"class="answer_Radio"><img width="24" src="../../../page/photo/gou.png" alt=""></div>\n' +
                                '                        <div class="answer_Content">' + res.data.list[i].answerList[j].answer + '</div>\n' +
                                '                    </div>';
                        }else {
                            zbz +=  '             <div class="answer">\n' +
                                '                        <div name="checked'+question_Index+'" class="answer_Checkbox" ><img width="24" src="../../../page/photo/gou.png" alt=""></div>\n' +
                                '                        <div class="answer_Content">' + res.data.list[i].answerList[j].answer + '</div>\n' +
                                '                    </div>';
                        }
                    }
                     question_Index++;

                question_coll +=
                    '            <div class="question_content">\n' +
                                        question+
                    '                <div class="answer_coll">\n' +
                                    zbz+
                    '                </div>\n' +
                    '        </div>';
            index++;

                    // alert(question_coll);
            }
            $('.question_coll').append(question_coll);
            $('.answer_Radio').on('click', radioClick);
            $('.answer_Checkbox').on('click', checkClick);
          form.render('radio');//重新绘制表单，让修改生效
        });
    }

    // function zAppend(a){
    //
    //     var id =$($(a.prev()).children()).length +1;
    //     $(a.prev()).append("<div class=\"layui-form-item\">\n" +
    //         '        <label class="layui-form-label">子标准'+id+'</label>' +
    //         "        <div class=\"layui-input-block\">\n" +
    //         "            <input type=\"text\" class=\"layui-input\"  name=\"answer\"  placeholder=\"选项答案\">\n" +
    //         "        </div>\n" +
    //         "    </div>");
    //
    //     var zbz = '';
    //     for(var i =0;i<item.length;i++){
    //         zbz += '<div class="zbz"></div>';
    //     }
    //     var bz = '<div class="bz"><div class="zbzColl">'+zbz+'</div></div>';
    // }
    //
    // $(".appendmore").click(function () {
    //     // items[items.length] = 2;
    //     // if(index >= maxfile)    return;//限制最多maxfile个文件框
    //     index1=index++;
    //
    //     var add =   "   <div id=\"add\">\n"+
    //         ' <div class="layui-form-item">\n'+
    //         "<label class=\"layui-form-label\">题目"+index1+"</label>\n"+
    //         "   <div class=\"layui-input-block\">\n"+
    //         "   <input type=\"text\" class=\"layui-input\" name=\"content\" placeholder=\"请输入题目\">\n"+
    //         "   </div>\n"+
    //         "   </div>\n"+
    //         "   <div class=\"layui-inline\">\n"+
    //         "   <a class=\"layui-btn layui-btn-normal addphoto\" align=\"right\">图片选择</a>\n"+
    //         "   </div>\n"+
    //         "   <div class=\"layui-input-block\">\n"+
    //         "   <label class=\"layui-form-label\">选项规则</label>\n"+
    //         '   <input type="radio" class="layui-input" name="optionRule'+ index1 +'"'+ 'value="单选" title="单选" checked="checked">' +
    //         '<div class=\"layui-unselect layui-form-radio\"><i class=\"layui-anim layui-icon\"></i><span>单选</span></div>\n'+
    //         '<input type="radio" class="layui-input" name="optionRule'+index1 + '"'+ ' value="多选" title="多选">' +
    //         '<div class=\"layui-unselect layui-form-radio layui-form-radioed\"><i class=\"layui-anim layui-icon\"></i><span>多选</span></div>\n'+
    //         "</div>\n"+
    //         " <div class=\"father\">\n"+
    //         "<div class=\"layui-form-item\">\n"+
    //         "   <label class=\"layui-form-label\">子标准1</label>\n"+
    //         "   <div class=\"layui-input-block\">\n"+
    //         "   <input type=\"text\" class=\"layui-input\"  name=\"answer\" placeholder=\"选项答案\">\n"+
    //         "   </div>\n"+
    //         "   </div>\n"+
    //         "   <div class=\"layui-form-item\">\n"+
    //         "   <label class=\"layui-form-label\">子标准2</label>\n"+
    //         "   <div class=\"layui-input-block\">\n"+
    //         "   <input type=\"text\" class=\"layui-input\"  name=\"answer\" placeholder=\"选项答案\">\n"+
    //         "   </div>\n"+
    //         "   </div>\n"+
    //         "   </div>\n"+
    //         '   <button id="item'+index1 + '"type=\"button\" id=\"append\" class=\"layui-btn layui-btn-primary\" onclick=\"zAppend($(this));\">添加子标准</button></div>'
    //     ;
    //
    //
    //     $("#appendmore").before(add);
    //     layui.form.render("radio");
    //
    // });



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

        var tit = $("#gradfather").children("div");
        for (var i = 0; i < tit.length; i++) {
            var d = $($($($(tit[i]).children(".layui-form-item")[0]).children(".layui-input-block")[0]).children("input")[0]).val();
            // alert(d);

            var e = $($(tit[i]).children(".layui-input-block")[0]);
            var isChecked = $(e.children(".layui-input")[0]).is(":checked");
            var rule ;
            if(isChecked){
                rule = 118;
            }else {
                rule = 119;
            }

            var answer_list = [];
            var die  = $($(tit[i]).children(".father")[0]);
            var answer = die.children(".layui-form-item");
            for (var k = 0; k < answer.length; k++) {
                // alert(123)
                var v = $($($(answer[k]).children(".layui-input-block")[0]).children("input")[0]).val();

                var answer_Content = {answer:v};
                answer_list.push(answer_Content);

            }
            var option = {contentTest:[{content:d}],optionRule:rule,answerList:answer_list};
            tm_list.push(option);

            var mmm ={title:title,votingInstruction:votingInstruction,votedNum:votedNum,list:tm_list};
            console.log(mmm);


        }
        alert(JSON.stringify(mmm));

        $api.AddVote(JSON.stringify(mmm),{contentType:"application/json;charset=UTF-8"},function (data) {
            layer.msg("发布添加成功！", {time: 1000}, function () {
                layer.closeAll("iframe");
                //刷新父页面
                parent.location.reload();
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
                var option = {contentTest:[{content:d}],optionRule:rule,answerList:answer_list};
                tm_list.push(option);
                // }
                var mmm1 ={modelTitle:modelTitle,title:title,votingInstruction:votingInstruction,votedNum:votedNum,list:tm_list};
                console.log(mmm1);


            }
            alert(JSON.stringify(mmm1));

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
});


