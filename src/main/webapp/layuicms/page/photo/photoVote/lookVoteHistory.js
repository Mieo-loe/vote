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


    /**
     * 初始化页面
     * */
    function init() {
        //初始化菜单信息
        initMenuInfo();

        //$('.answer_Radio').on('click', radioClick);
        //$('.answer_Checkbox').on('click', checkClick);
    }

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

    init();

    /**
     * 初始化菜单信息
     * */
    function initMenuInfo() {
        var queryArgs = $tool.getQueryParam();//获取查询参数
        var hid = queryArgs['hid'];
        var url = $tool.getContext() + 'photoModel/get.do';
        var req = {
            hid: hid
        };
        //findById
        $api.GetPhotoVote(req, function (res) {
            //var index = 0;
            console.log(res);
            var data = res.data;
            $("[name='title']").val(data.title);
            $("[name='votingInstruction']").val(data.votingInstruction);
            $("[name='votedNum']").val(data.votedNum);
            var question_Index = 1;
            console.log(data);
            for (var i = 0; i < res.data.list.length; i++) {
                var question_Num = '';
                var answer_coll = '';
                var question_Title = '';
                question_Num += '<div class="question_Num">' + question_Index + '</div>'
                for (var x = 0; x < res.data.list[i].optionTitle.length; x++) {
                    //50  文字     51 图片
                    if (res.data.list[i].isChar == 50) {
                        question_Title += ' <div class="question_1" style="font-size: 26px;margin-left: 24px;margin-top: 7px">' + res.data.list[i].optionTitle[x].content + '</div>'
                    } else {
                        if (res.data.list[i].optionTitle.length == 1) {
                            //第一个img是需要修改的     第二个Img写死
                            question_Title +=
                                '                            <div class="question_img1" style="margin-left: 14px;">\n' +
                                '                            <img class="title_Photo1" width="732" height="416" src="' + res.data.list[i].optionTitle[x].content + '">\n' +
                                '                            <img class="fangdaJ" src="../../../page/system/photo/fangda.png">\n' +
                                '                    </div>'
                        } else if (res.data.list[i].optionTitle.length == 2 || res.data.list[i].optionTitle.length == 4) {
                            //第一个img是需要修改的     第二个Img写死
                            question_Title +=
                                '                            <div class="question_img2" >\n' +
                                '                            <img class="title_Photo2" src="' + res.data.list[i].optionTitle[x].content + '">\n' +
                                '                            <img class="fangdaJ" src="../../../page/system/photo/fangda.png">\n' +

                                '                    </div>'
                        } else {
                            //第一个img是需要修改的     第二个Img写死
                            question_Title +=
                                '                            <div class="question_img3">\n' +
                                '                            <img class="title_Photo3" src="' + res.data.list[i].optionTitle[x].content + '">\n' +
                                '                            <img class="fangdaJ" src="../../../page/system/photo/fangda.png">\n' +
                                '                        </div>\n'

                        }
                    }
                }
                for (var j = 0; j < res.data.list[i].answerList.length; j++) {
                    if (res.data.list[i].optionRule == 78) {
                        answer_coll +=
                            '                        <div class="answer" >\n' +
                            '                        <div name="checked' + question_Index + '"class="answer_Radio"  id="' + res.data.list[i].answerList[j].aid + '"><img width="24" src="../../../page/system/photo/gou.png" alt=""></div>\n' +
                            '                        <div class="answer_Content">' + res.data.list[i].answerList[j].answer + '</div>\n' +
                            '                    </div>'
                    } else {
                        answer_coll += '<div class="answer">\n' +
                            '                        <div name="checked' + question_Index + '"class="answer_Checkbox" id="' + res.data.list[i].answerList[j].aid + '" ><img width="24" src="../../../page/system/photo/gou.png" alt=""></div>\n' +
                            '                        <div class="answer_Content">' + res.data.list[i].answerList[j].answer + '</div>\n' +
                            '                    </div>'
                    }
                    // alert(res.data.list[i].answerList[j].aid);

                }
                question_Index++;
                for (var j = 0; j < res.data.list[i].optionTitle.length; j++) {
                    var nei = '   <div  class="question_content">\n' +
                        '   <div  class="question_Title_coll">\n' +
                        question_Num +
                        '<div class="question_Title">\n' +
                        question_Title +
                        '    </div>\n' +
                        '    </div>\n' +
                        '<div class="answer_coll">\n' +
                        answer_coll +
                        '</div>\n' +
                        '    </div>\n'
                }


                $('#question_coll').append(nei);
                layui.form.render();
                //uploadRender('#test' + tt);
            }
            form.render('radio');//重新绘制表单，让修改生效

            $('.answer_Radio').on('click', radioClick);
            $('.answer_Checkbox').on('click', checkClick);
        });
    }


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


    //写提交
    form.on("submit(previewSubmit_btn)", function (data) {
        var queryArgs = $tool.getQueryParam();//获取查询参数
        //获取被选中的hid
        hid = queryArgs['hid'];
        var aa = window.sessionStorage.getItem("aa");// 从 sessionStorage 获取数据
        var bb = JSON.parse(aa);
        //var content = queryArgs['content'];
        //$("[name='content']").val(bb.content);
        var content = bb.content;

        var obj = document.getElementsByClassName("answer_Radio");
        var aids = [];
        for (var k = 0; k < obj.length; k++) {
            if (obj[k].classList.contains('bgi')) {
                aids.push(obj[k].id);
            }
        }
        var obj1 = document.getElementsByClassName("answer_Checkbox");

        for (var k = 0; k < obj1.length; k++) {
            if (obj1[k].classList.contains('bgi')) { //classList 作用把class属性弄成一个数组。 contains判断数组里面有没有有需要的类
                aids.push(obj1[k].id);
            }
        }
        var req = {
            hid: hid,
            aids: aids,
            content: content
        }
        $api.VoteSuccess(JSON.stringify(req), {contentType: "application/json;charset=UTF-8"}, function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            layer.msg("投票成功！", {time: 1000}, function () {
                layer.closeAll("iframe");
                //刷新父页面
                parent.location.reload();
            });
        });
        return false;
    });

});


