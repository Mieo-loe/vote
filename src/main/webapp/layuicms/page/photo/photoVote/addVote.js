layui.config({
    base: $config.resUrl + 'layuicms/common/js/'//定义基目录
}).extend({
    ajaxExtention: 'ajaxExtention',//加载自定义扩展，每个业务js都需要加载这个ajax扩展
    $tool: 'tool',
    $api: 'api'
}).use(['form', 'layer', 'tree', '$api', 'jquery', 'ajaxExtention', '$tool'], function () {
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
        //加载角色列表
        loadRoleList();
    }

    init();

    /**
     * 加载角色列表
     * */
    function loadRoleList() {
        var req = {
            page: 1,
            limit: 999
        };


        $api.GetRoleList(req, function (res) {
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
     * 存为模板
     * */
    form.on("submit(keep)", function (data) {
        var layer_title = data.field.title;

        layer.prompt({title: '请输入模板标题', value: layer_title, formType: 0}, function (modelTitle, index) {

            var modelTitle = modelTitle;
            var votingInstruction = data.field.votingInstruction;
            var votedNum = data.field.votedNum;
            var tm_list = [];
            var tit = $("#diao").children("div");
            for (var i = 0; i < tit.length; i++) {
                var photos = [];
                var d = $($($($(tit[i]).children(".layui-form-item")[0]).children(".layui-input-block")[0]).children("input")[0]).val();
                var ph = $($("#diao").children("div")[i]).children(".layui-upload").children(".layui-quote-nm").children(".layui-upload-list").children();
                // alert(d);
                for (var j = 0; j < ph.length; j++) {
                    var m = $($($($($(tit[i]).children(".layui-upload")[0]).children(".layui-quote-nm")[0]).children(".layui-upload-list")[0]).children()[j]).attr('src');
                    var photoContent = {content: m};
                    photos.push(photoContent);
                }

                var e = $($(tit[i]).children(".layui-input-block")[0]);
                var isChecked = $(e.children(".layui-input")[0]).is(":checked");
                var rule;
                if (isChecked) {
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
                modelTitle: modelTitle,
                title: layer_title,
                votingInstruction: votingInstruction,
                votedNum: votedNum,
                list: tm_list
            };
            // alert(JSON.stringify(mmm));
            console.log(JSON.stringify(mmm));
            $api.AddModel(JSON.stringify(mmm), {contentType: "application/json;charset=UTF-8"}, function (data) {
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


    /**
     * 投票发布
     * */
    form.on("submit(addVote)", function (data) {
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
            var isChecked = $(e.children(".layui-input")[0]).is(":checked");
            var rule;
            if (isChecked) {
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
        //生成8位随机序列号
        var accounts = [];
        for (var z = 0; z < votedNum; z++) {
            var account = "";
            var data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            for (var i = 0; i < 8; i++) {
                var r = parseInt(Math.random() * 61);
                account += data[r];
            }
            accounts.push(account);
        }
        var ac = {
            accounts: accounts
        };
        var ac = JSON.stringify(ac);//在js中把对象转为JSON字符串的语法
        window.sessionStorage.setItem("ac", ac);//存入域，把序列号传给显示序列号的页面

        var mmm = {
            title: title, votingInstruction: votingInstruction, votedNum: votedNum, list: tm_list, accounts: accounts
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
        $api.AddVote(JSON.stringify(mmm), {contentType: "application/json;charset=UTF-8"}, function (data) {
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
            var isChecked = $(e.children(".layui-input")[0]).is(":checked");
            var rule;
            if (isChecked) {
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
            modelTitle: modelTitle,
            title: title,
            votingInstruction: votingInstruction,
            votedNum: votedNum,
            list: tm_list
        };

        console.log(mmm);
        var ss = JSON.stringify(mmm);//在js中把对象转为JSON字符串的语法
        window.sessionStorage.setItem("ss", ss);
        var index = layui.layer.open({
            title: "预览",
            type: 2,
            content: "addLookVote.html",
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


});


