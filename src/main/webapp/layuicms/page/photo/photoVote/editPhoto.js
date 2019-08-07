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


    var roleIdList = new Array();//所有的角色id列表
    var menu_roleIds = [];//菜单所属角色列表

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
     * 初始化页面
     * */
    function init() {
        //初始化菜单信息
        initMenuInfo();
    }

    init();

    /**
     * 初始化菜单信息
     * */
    var mid;
    function initMenuInfo() {
        var queryArgs = $tool.getQueryParam();//获取查询参数
        mid = queryArgs['mid'];
        var url = $tool.getContext() + 'photoModel/get.do';
        var req = {
            mid: mid
        };

        //findById
        $api.GetPhotoModel(req, function (res) {
            //var index = 0;
            console.log(res);
            var data = res.data;
            $("[name='title']").val(data.title);
            $("[name='votingInstruction']").val(data.votingInstruction);
            $("[name='votedNum']").val(data.votedNum);
            for (var i = 0; i < res.data.list.length; i++) {

                var zbz = '';
                var img = '';
                for (var j = 0; j < res.data.list[i].answerList.length; j++) {
                    var ss = j + 1;
                    zbz += '<div class="layui-form-item">\n' +
                        '        <label class="layui-form-label">子标准' + ss + '</label>\n' +
                        '        <div class="layui-input-block">\n' +
                        '            <input type="text" class="layui-input"  name="answer" value="' + res.data.list[i].answerList[j].answer + '" placeholder="选项答案">\n' +
                        '        </div>\n' +
                        '    </div>';
                }
                if (res.data.list[i].optionRule == 78) {
                    var isCheck;
                    isCheck = "    <div class=\"layui-form-item\">\n" +
                        "        <label  class=\"layui-form-label\">选项规则:</label>\n" +
                        "        <div class=\"layui-input-block\" id=\"optionRule\">\n" +
                        '   <input type="radio" class="layui-input" name="optionRule' + index + '"' + 'value=' + res.data.list[i].optionRule + ' title="单选" checked="checked">' +
                        '<div class=\"layui-unselect layui-form-radio\"><i class=\"layui-anim layui-icon\"></i><span>单选</span></div>\n' +

                        '<input type="radio" class="layui-input" name="optionRule' + index + '"' + 'value=' + res.data.list[i].optionRule + '  title="多选" >' +
                        '<div class=\"layui-unselect layui-form-radio layui-form-radioed\"><i class=\"layui-anim layui-icon\"></i><span>多选</span></div>\n' +

                        "        </div>\n" +
                        "    </div>\n";
                } else {
                    isCheck = "    <div class=\"layui-form-item\">\n" +
                        "        <label  class=\"layui-form-label\">选项规则:</label>\n" +
                        "        <div class=\"layui-input-block\" id=\"optionRule\">\n" +
                        '   <input type="radio" class="layui-input" name="optionRule' + index + '"' + 'value=' + res.data.list[i].optionRule + ' title="单选" >' +
                        '<div class=\"layui-unselect layui-form-radio\"><i class=\"layui-anim layui-icon\"></i><span>单选</span></div>\n' +

                        '<input type="radio" class="layui-input" name="optionRule' + index + '"' + 'value=' + res.data.list[i].optionRule + '  title="多选" checked="checked" >' +
                        '<div class=\"layui-unselect layui-form-radio layui-form-radioed\"><i class=\"layui-anim layui-icon\"></i><span>多选</span></div>\n' +

                        "        </div>\n" +
                        "    </div>\n";
                }
                var index1 = index++;
                for (var j = 0; j < res.data.list[i].optionTitle.length; j++) {
                    img +=
                        ' <img class="title_Photo2" width="200px" height="200px" src="' + res.data.list[i].optionTitle[j].content + '">\n'

                    if (res.data.list[i].isChar == 50) {
                        var bz = '<div class="addd">\n' +
                            '    <div class="layui-form-item">\n' +
                            '        <label class="layui-form-label">题目' + index + '</label>\n' +
                            '        <div class="layui-input-block">\n' +
                            '            <input type="text" class="layui-input" name="content" value="' + res.data.list[i].optionTitle[j].content + '" placeholder="请输入题目">\n' +
                            '        </div>\n' +
                            '    </div>\n' +
                            '        <div class="layui-upload">\n' +
                            '            <button type="button" class="layui-btn" id="test' + index1 + '"data-id="demo2'+index1+'">多图片上传</button>\n' +
                            '            <blockquote class="layui-elem-quote layui-quote-nm" style="margin-top: 10px;">\n' +
                            '                预览图：\n' +
                            '                <div class="layui-upload-list" id="demo2'+index1+'">' +
                            '</div>\n' +
                            '            </blockquote>\n' +
                            '        </div>\n' +
                            '   <div  class="layui-input-block">\n' +
                            isCheck +
                            '    </div>\n' +
                            '    <div class="zibiaozhun">\n' +
                            zbz +
                            '    </div>\n' +
                            '   <button id="item' + index + '"type=\"button\" id=\"append\" class=\"layui-btn layui-btn-primary\" onclick="zAppend($(this));">添加子标准</button></div>' +
                            '    </div>';
                    }else {

                        var bz = '<div class="addd">\n' +
                            '    <div class="layui-form-item">\n' +
                            '        <label class="layui-form-label">题目' + index + '</label>\n' +
                            '        <div class="layui-input-block">\n' +
                            '            <input type="text" class="layui-input" name="content" value="" placeholder="请输入题目">\n' +
                            '        </div>\n' +
                            '    </div>\n' +
                            '        <div class="layui-upload">\n' +
                            '            <button type="button" class="layui-btn" id="test' + index1 + '"data-id="demo2'+index1+'">多图片上传</button>\n' +
                            '            <blockquote class="layui-elem-quote layui-quote-nm" style="margin-top: 10px;">\n' +
                            '                预览图：\n' +
                            '                <div class="layui-upload-list" id="demo2'+index1+'">' +
                            img+
                            '</div>\n' +
                            '            </blockquote>\n' +
                            '        </div>\n' +
                            '   <div  class="layui-input-block">\n' +
                            isCheck +
                            '    </div>\n' +
                            '    <div class="zibiaozhun">\n' +
                            zbz +
                            '    </div>\n' +
                            '   <button id="item' + index + '"type=\"button\" id=\"append\" class=\"layui-btn layui-btn-primary\" onclick="zAppend($(this));">添加子标准</button></div>' +
                            '    </div>';
                    }

                }
                $('#diao').append(bz);
                console.log($('#test'+index1));
                uploadRender('#test'+ index1);
                layui.form.render();

            }
            form.render('radio');//重新绘制表单，让修改生效
            $('.answer_Radio').on('click', radioClick);
            $('.answer_Checkbox').on('click', checkClick);

        });
    }

    // var index = 3;
    // function zAppend(a) {
    //     var id = $($(a.prev()).children()).length + 1;
    //     $(a.prev()).append("<div class=\"layui-form-item\">\n" +
    //         '        <label class="layui-form-label">子标准' + id + '</label>' +
    //         "        <div class=\"layui-input-block\">\n" +
    //         "            <input type=\"text\" class=\"layui-input\" name=\"answer\"  placeholder=\"选项答案\">\n" +
    //         "        </div>\n" +
    //         "    </div>");
    //
    // }


    // $(".appendmore").click(function () {
    //     // flag=false;
    //     // items[items.length] = 2;
    //     index1 = index++;
    //     // alert(index1);<div id="add">  id="item'+index1 + '"
    //     var add = "<div class=\"addd\">\n" +
    //         "            <div class=\"layui-form-item\">\n" +
    //         '<label class="layui-form-label">题目' + index1 + '</label>' +
    //         "                <div class=\"layui-input-block\">\n" +
    //         "                    <input type=\"text\" class=\"layui-input\" name=\"content\" placeholder=\"请输入题目\">\n" +
    //         "                </div>\n" +
    //         "            </div>\n" +
    //         "       \n" +
    //         "            <div class=\"layui-upload\">\n" +
    //         "                <button type=\"button\" class=\"layui-btn\" id=\"test"+index1+"\">多图片上传</button>\n" +
    //         "                <blockquote class=\"layui-elem-quote layui-quote-nm\" style=\"margin-top: 10px;\">\n" +
    //         "                    预览图：\n" +
    //         "                    <div class=\"layui-upload-list\" id=\"demo2\"></div>\n" +
    //         "                </blockquote>\n" +
    //         "            </div>\n" +
    //         "            \n" +
    //         "   <div class=\"layui-input-block\">\n" +
    //         "   <label class=\"layui-form-label\">选项规则</label>\n" +
    //         '   <input type="radio" class="layui-input" name="optionRule' + index + '"' + 'value="单选" title="单选" checked="checked">' +
    //         '<div class=\"layui-unselect layui-form-radio\"><i class=\"layui-anim layui-icon\"></i><span>单选</span></div>\n' +
    //         '<input type="radio" class="layui-input" name="optionRule' + index + '"' + ' value="多选" title="多选">' +
    //         '<div class=\"layui-unselect layui-form-radio layui-form-radioed\"><i class=\"layui-anim layui-icon\"></i><span>多选</span></div>\n' +
    //         "</div>\n" +
    //         "            <div class=\"zibiaozhun\">\n" +
    //         "                <div class=\"layui-form-item\">\n" +
    //         "                    <label class=\"layui-form-label\">子标准1</label>\n" +
    //         "                    <div class=\"layui-input-block\">\n" +
    //         "                        <input type=\"text\" class=\"layui-input\" name=\"answer\" placeholder=\"选项答案\">\n" +
    //         "                    </div>\n" +
    //         "                </div>\n" +
    //         "                <div class=\"layui-form-item\">\n" +
    //         "                    <label class=\"layui-form-label\">子标准2</label>\n" +
    //         "                    <div class=\"layui-input-block\">\n" +
    //         "                        <input type=\"text\" class=\"layui-input\" name=\"answer\" placeholder=\"选项答案\">\n" +
    //         "                    </div>\n" +
    //         "                </div>\n" +
    //         "            </div>\n" +
    //         '   <button id="item' + index1 + '"type=\"button\" id=\"append\" class=\"layui-btn layui-btn-primary\" onclick=\"zAppend($(this));\">添加子标准</button></div>';
    //
    //
    //     $("#appendmore").before(add);
    //     layui.form.render();
    //     uploadRender('#test'+index1);
    //
    // });

    /**
     * 加载角色列表
     * */
    function loadRoleList() {
        var url = $tool.getContext() + 'photoVote/voteList.do';
        var req = {
            page: 1,
            limit: 999
        };

        $api.GetRoleList(req, function (res) {
            var data = res.data;
            if (data.length > 0) {
                var roleHtml = "";
                for (var i = 0; i < data.length; i++) {
                    //是否初始化选中
                    if ($.inArray(data[i].id, menu_roleIds) != -1) {
                        roleHtml += '<input type="checkbox" checked name="' + data[i].id + '" title="' + data[i].roleName + '">';
                    } else {
                        roleHtml += '<input type="checkbox" name="' + data[i].id + '" title="' + data[i].roleName + '">';
                    }

                    roleIdList.push(data[i].id);//保存id列表
                }

                $('.role-check-list').append($(roleHtml));
                form.render();//重新绘制表单，让修改生效
            }
        });
    }

    /**
     * 投票发布
     * */
    form.on("submit(editVotePhoto)", function (data) {
        var title = data.field.title;
        var votingInstruction = data.field.votingInstruction;
        var votedNum = data.field.votedNum;
        var tm_list=[];
        var tit = $("#diao").children("div");
        for (var i = 0; i < tit.length; i++) {
            var photos =[];
            var d = $($($($(tit[i]).children(".layui-form-item")[0]).children(".layui-input-block")[0]).children("input")[0]).val();
            var ph = $($("#diao").children("div")[i]).children(".layui-upload").children(".layui-quote-nm").children(".layui-upload-list").children();
            for(var j=0;j<ph.length;j++){
                var m = $($($($($(tit[i]).children(".layui-upload")[0]).children(".layui-quote-nm")[0]).children(".layui-upload-list")[0]).children()[j]).attr('src');
                var photoContent = {content:m};
                photos.push(photoContent);
            }
            //var m = $('#diao').find('.addd').find('.layui-upload-list').find('img')
            //var m = $($($($($(tit[i]).children(".layui-upload")[0]).children(".layui-quote-nm")[0]).children(".layui-upload-list")[0]).children()[0]).attr('src');

            console.log(photos);
            var e = $($(tit[i]).children(".layui-input-block")[0]);
            var flag = false;
            $($('input[name=optionRule'+i+']')).each((i,e) => {
                if(i==0) {
                    if($(e).is(":checked")){
                        flag = true;
                    }
                }
            })
            var rule;

            if (flag) {
                rule = 78;
            } else {
                rule = 79;
            }
            var answer_list = [];
            var die  = $($(tit[i]).children(".zibiaozhun")[0]);
            var answer = die.children(".layui-form-item");
            for (var k = 0; k < answer.length; k++) {
                var v = $($($(answer[k]).children(".layui-input-block")[0]).children("input")[0]).val();
                var answer_Content = {answer:v};
                answer_list.push(answer_Content);
            }
            if(d==""){
                var option = {optionTitle:photos,optionRule:rule,answerList:answer_list,isChar:51};
            }else{
                var option = {optionTitle:[{content:d}],optionRule:rule,answerList:answer_list,isChar:50};
            }
            tm_list.push(option);
        }//生成8位随机序列号
        var accounts = [];
        for (var z = 0; z < votedNum; z++){
            var account = "";
            var data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            for (var i = 0; i < 8; i++) {
                var r = parseInt(Math.random() * 61);
                account += data[r];
            }
            accounts.push(account);
        }
        var ac = {
            accounts:accounts
        };
        var ac = JSON.stringify(ac);//在js中把对象转为JSON字符串的语法
        window.sessionStorage.setItem("ac", ac);//存入域，把序列号传给显示序列号的页面



        var mmm ={title:title,votingInstruction:votingInstruction,votedNum:votedNum,list:tm_list,accounts:accounts
        };
        console.log(mmm);
        //请求
        // var req = {
        //     title: title,
        //     votingInstruction: votingInstruction,
        //     votedNum: votedNum,
        //     list: list
        // };

        console.log(JSON.stringify(mmm));
        // var test = {ResContent:JSON.stringify(mmm)};
        // $.post($tool.getContext() + 'photoVote/votePhoto.do',JSON.stringify(mmm),function (data) {
        //     alert("success");
        // },"text");
        $api.AddVote(JSON.stringify(mmm),{contentType:"application/json;charset=UTF-8"},function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            layer.msg("发布成功！", {time: 1000}, function () {
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
                // layer.closeAll("iframe");
                //刷新父页面
                // parent.location.reload();
            });
        });
        return false;
    })

    //使用中的预览
    /**
     * 预览
     * */
    form.on("submit(look)", function (data) {
        var modelTitle = modelTitle;
        var title = data.field.title;
        var votingInstruction = data.field.votingInstruction;
        var votedNum = data.field.votedNum;
        var tm_list = [];
        var tit = $("#diao").children("div");
        for (var i = 0; i < tit.length; i++) {
            var photos = [];
            var d = $($($($(tit[i]).children(".layui-form-item")[0]).children(".layui-input-block")[0]).children("input")[0]).val();
            var ph = $($("#diao").children("div")[i]).children(".layui-upload").children(".layui-quote-nm").children(".layui-upload-list").children();
            for (var j = 0; j < ph.length; j++) {
                var m = $($($($($(tit[i]).children(".layui-upload")[0]).children(".layui-quote-nm")[0]).children(".layui-upload-list")[0]).children()[j]).attr('src');
                var photoContent = {content: m};
                photos.push(photoContent);
            }
            //var m = $('#diao').find('.addd').find('.layui-upload-list').find('img')
            //var m = $($($($($(tit[i]).children(".layui-upload")[0]).children(".layui-quote-nm")[0]).children(".layui-upload-list")[0]).children()[0]).attr('src');

            console.log(photos);
            var e = $($(tit[i]).children(".layui-input-block")[0]);
            // var isChecked = $(e.children(".layui-input")[0]).is(":checked");
            var flag = false;
            $($('input[name=optionRule'+i+']')).each((i,e) => {
                if(i==0) {
                    if($(e).is(":checked")){
                        flag = true;
                    }
                }
            })
            var rule;

            if (flag) {
                rule = 78;
            } else {
                rule = 79;
            }
            var answer_list = [];
            var die = $($(tit[i]).children(".zibiaozhun")[0]);
            var answer = die.children(".layui-form-item");
            for (var k = 0; k < answer.length; k++) {
                var v = $($($(answer[k]).children(".layui-input-block")[0]).children("input")[0]).val();
                var answer_Content = {answer: v};
                answer_list.push(answer_Content);
            }
            if (d == "") {
                var option = {optionTitle: photos, optionRule: rule, answerList: answer_list, isChar: 51};
            } else {
                var option = {optionTitle: [{content: d}], optionRule: rule, answerList: answer_list, isChar: 50};
            }
            tm_list.push(option);

        }
        var mmm = {
            modelTitle:modelTitle,title: title, votingInstruction: votingInstruction, votedNum: votedNum, list: tm_list
        };

        console.log(mmm);
        var ss = JSON.stringify(mmm);//在js中把对象转为JSON字符串的语法
        window.sessionStorage.setItem("ss", ss);
        var index = layui.layer.open({
            title: "预览",
            type: 2,
            content: "lookModelVote.html",
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
        return false;


    })

    /**
     * 存为模板
     * */
    form.on("submit(keep)", function (data) {
        var layer_title = data.field.title;

        layer.prompt({title: '请输入模板标题',value:layer_title,formType: 0}, function(modelTitle, index){

            var modelTitle = modelTitle;
            var votingInstruction = data.field.votingInstruction;
            var votedNum = data.field.votedNum;
            var tm_list=[];
            var tit = $("#diao").children("div");
            for (var i = 0; i < tit.length; i++) {
                var photos =[];
                var d = $($($($(tit[i]).children(".layui-form-item")[0]).children(".layui-input-block")[0]).children("input")[0]).val();
                var ph = $($("#diao").children("div")[i]).children(".layui-upload").children(".layui-quote-nm").children(".layui-upload-list").children();
                // alert(d);
                for(var j=0;j<ph.length;j++){
                    var m = $($($($($(tit[i]).children(".layui-upload")[0]).children(".layui-quote-nm")[0]).children(".layui-upload-list")[0]).children()[j]).attr('src');
                    var photoContent = {content:m};
                    photos.push(photoContent);
                }

                var e = $($(tit[i]).children(".layui-input-block")[0]);
                var flag = false;
                $($('input[name=optionRule'+i+']')).each((i,e) => {
                    if(i==0) {
                        if($(e).is(":checked")){
                            flag = true;
                        }
                    }
                })
                var rule;

                if (flag) {
                    rule = 78;
                } else {
                    rule = 79;
                }
                var answer_list = [];
                var die  = $($(tit[i]).children(".zibiaozhun")[0]);
                var answer = die.children(".layui-form-item");
                for (var k = 0; k < answer.length; k++) {
                    var v = $($($(answer[k]).children(".layui-input-block")[0]).children("input")[0]).val();
                    var answer_Content = {answer:v};
                    answer_list.push(answer_Content);
                }
                if(d==""){
                    var option = {optionTitle:photos,optionRule:rule,answerList:answer_list,isChar:51};
                }else{
                    var option = {optionTitle:[{content:d}],optionRule:rule,answerList:answer_list,isChar:50};
                }
                tm_list.push(option);

            }
            var mmm ={modelTitle:modelTitle,title:layer_title,votingInstruction:votingInstruction,votedNum:votedNum,list:tm_list
            };
            // alert(JSON.stringify(mmm));
            console.log(JSON.stringify(mmm));
            $api.AddModel(JSON.stringify(mmm),{contentType:"application/json;charset=UTF-8"},function (data) {
                //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
                layer.msg("模板创建成功！", {time: 1000}, function () {
                    layer.closeAll("iframe");
                    //刷新父页面
                    parent.location.reload();
                });
            });


        });

        return false;
    })

});

