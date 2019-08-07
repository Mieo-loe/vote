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
        var ss = window.sessionStorage.getItem("ss");
        var nn = JSON.parse(ss);
        $("[name='title']").val(nn.title);
        $("[name='votingInstruction']").val(nn.votingInstruction);
        $("[name='votedNum']").val(nn.votedNum);
        var question_Index = 1;
        for (var i = 0; i < nn.list.length; i++) {
            var question_Num = '';
            var answer_coll = '';
            var question_Title = '';
            question_Num += '<div class="question_Num">' + question_Index + '</div>'
            for (var x = 0; x < nn.list[i].optionTitle.length; x++) {
                //50  文字     51 图片
                    if ((nn.list[i].optionTitle[x].content).match(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/)) {
                        question_Title += ' <div class="question_1" style="font-size: 26px;margin-left: 24px;margin-top: 7px">' + nn.list[i].optionTitle[x].content + '</div>'
                    } else {
                        if (nn.list[i].optionTitle.length == 1) {
                            //第一个img是需要修改的     第二个Img写死
                            question_Title +=
                                '                            <div class="question_img1" style="margin-left: 14px;">\n' +
                                '                            <img class="title_Photo1" width="732" height="416" src="' + nn.list[i].optionTitle[x].content + '">\n' +
                                '                            <img class="fangdaJ" src="../../../page/system/photo/fangda.png">\n' +
                                '                    </div>'
                        } else if (nn.list[i].optionTitle.length == 2 || nn.list[i].optionTitle.length == 4) {
                            //第一个img是需要修改的     第二个Img写死
                            question_Title +=
                                '                            <div class="question_img2" >\n' +
                                '                            <img class="title_Photo2" src="' + nn.list[i].optionTitle[x].content + '">\n' +
                                '                            <img class="fangdaJ" src="../../../page/system/photo/fangda.png">\n' +
                                '                    </div>'
                        } else {
                            //第一个img是需要修改的     第二个Img写死
                            question_Title +=
                                '                            <div class="question_img3">\n' +
                                '                            <img class="title_Photo3" src="' + nn.list[i].optionTitle[x].content + '">\n' +
                                '                            <img class="fangdaJ" src="../../../page/system/photo/fangda.png">\n' +
                                '                        </div>\n'

                        }
                    }
            }
            for (var j = 0; j < nn.list[i].answerList.length; j++) {
                if (nn.list[i].optionRule == 78) {
                    answer_coll +=
                        '                        <div class="answer">\n' +
                        '                        <div name="checked' + question_Index + '"class="answer_Radio"><img width="24" src="../../../page/system/photo/gou.png" alt=""></div>\n' +
                        '                        <div class="answer_Content">' + nn.list[i].answerList[j].answer + '</div>\n' +
                        '                    </div>'
                } else {
                    answer_coll += '<div class="answer">\n' +
                        '                        <div name="checked' + question_Index + '"class="answer_Checkbox" ><img width="24" src="../../../page/system/photo/gou.png" alt=""></div>\n' +
                        '                        <div class="answer_Content">' + nn.list[i].answerList[j].answer + '</div>\n' +
                        '                    </div>'
                }
            }
            question_Index++;
            for (var j = 0; j < nn.list[i].optionTitle.length; j++) {
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
    }

});


