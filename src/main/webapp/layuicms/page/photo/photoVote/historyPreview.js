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
    var roleIdList = [];//所有的角色id列表

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
            renderTree('#org-tree', data);
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
        // //提交数据
        // form.on("submit(readingSubmit_btn)", function (data) {
        //     var queryArgs = $tool.getQueryParam();//获取查询参数
        //     //获取被选中的hid
        //     hid = queryArgs['hid'];
        //     var aa = window.sessionStorage.getItem("aaa");// 从 sessionStorage 获取数据
        //     alert(aa);
        //     var bb = JSON.parse(aa);
        //     console.log(bb);
        //     //var content = queryArgs['content'];
        //     //$("[name='content']").val(bb.content);
        //    // alert(eval('(' + aa + ')')) ;
        //     var content = bb.content;
        //     // var hid = bb.hid;
        //     var obj = document.getElementsByClassName("answer_Radio");
        //     var aids = [];
        //     for (var k = 0; k < obj.length; k++) {
        //         if (obj[k].classList.contains('bgi')) {
        //             aids.push(obj[k].id);
        //         }
        //     }
        //     var obj1 = document.getElementsByClassName("answer_Checkbox");
        //
        //     for (var k = 0; k < obj1.length; k++) {
        //         if (obj1[k].classList.contains('bgi')) { //classList 作用把class属性弄成一个数组。 contains判断数组里面有没有有需要的类
        //             aids.push(obj1[k].id);
        //         }
        //     }
        //
        //     var req = {
        //         hid: hid,
        //         aids: aids,
        //         content: content
        //     };
        //     alert(JSON.stringify(req));
        //     $api.VoteSuccess(JSON.stringify(req), {contentType: "application/json;charset=UTF-8"}, function (data) {
        //         //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
        //         layer.msg("投票成功！", {time: 1000}, function () {
        //             layer.closeAll("iframe");
        //             //刷新父页面
        //             parent.location.reload();
        //         });
        //     });
        //     return false;
        // });

        /**
         * 初始化菜单信息
         * */
        function initModelfo() {//弹框验证账号
            // var queryArgs = $tool.getQueryParam();//获取查询参数
            // var hid = queryArgs['hid'];
            // var url = $tool.getContext() + 'photoVote/get.do';
            var hh = window.sessionStorage.getItem("hhh")
            // alert(JSON.stringify(hh));

                var data = JSON.parse(hh);
                $("[name='title']").val(data.title);
                $("[name='votingInstruction']").val(data.votingInstruction);
                $("[name='votedNum']").val(data.votedNum);
                var question_coll = '';
                for (var i = 0; i<data.list.length; i++) {
                    var zbz = ' ';
                    var Imgs = '';
                    var question = '';
                    if (data.list[i].isChar == 50) {//文字
                        question += '                <div class="question_Title_coll">\n' +
                            '                    <div class="question_Num">' + (i + 1) + '</div>\n' +
                            '                    <div class="question_Title" style="width: 726px">\n' +
                            '                        <div class="question_content" style="padding-top: 9px">' + data.list[i].contentTest[0].content + '</div>\n' +
                            '                    </div>\n' +
                            '                </div>';
                    } else {//图片
                        for (var x = 0; x < data.list[i].contentTest.length; x++) {
                            if (data.list[i].contentTest.length == 1) {
                                Imgs += ' <img  src="' + data.list[i].contentTest[x].content + '" class="layui-upload-img">';
                                question = ' <div class="question_Title_coll">\n' +
                                    '                    <div class="question_Num">1</div>\n' +
                                    '                    <div class="question_Title">\n' +
                                    '                        <div class="question_img1">\n' +
                                    Imgs +
                                    '                            <img class="fangdaJ" src="../../../page/photo/fangda.png">\n' +
                                    '                        </div>\n' +
                                    '                    </div>\n' +
                                    '                </div>';

                            } else if (data.list[i].contentTest.length == 2 || data.list[i].contentTest.length == 4) {
                                Imgs += '<div class="question_img2">\n' +
                                    '                            <img class="title_Photo2" src="' + data.list[i].contentTest[x].content + '">\n' +
                                    '                            <img class="fangdaJ" src="../../../page/photo/fangda.png">\n' +
                                    '                        </div>';
                                question = ' <div class="question_Title_coll">\n' +
                                    '                    <div class="question_Num">' + (i + 1) + '</div>\n' +
                                    '                    <div class="question_Title">\n' +
                                    Imgs +
                                    '                    </div>\n' +
                                    '                </div>';

                            } else {
                                Imgs += '<div class="question_img3">\n' +
                                    '                            <img class="title_Photo3" src="' + data.list[i].contentTest[x].content + '">\n' +
                                    '                            <img class="fangdaJ" src="../../../page/photo/fangda.png">\n' +
                                    '                        </div>';
                                question = ' <div class="question_Title_coll">\n' +
                                    '                    <div class="question_Num">' + (i + 1) + '</div>\n' +
                                    '                    <div class="question_Title">\n' +
                                    Imgs +
                                    '                    </div>\n' +
                                    '                </div>';
                            }
                        }
                    }
                    for (var j = 0; j < data.list[i].answerList.length; j++) {
                        if (data.list[i].optionRule == 78) {
                            zbz += '<div class="answer">\n' +
                                '                        <div name="checked' + question_Index + '"class="answer_Radio" id="' + data.list[i].answerList[j].aid + '"><img width="24" src="../../../page/photo/gou.png" alt=""></div>\n' +
                                '                        <div class="answer_Content">' + data.list[i].answerList[j].answer + '</div>\n' +
                                '                    </div>';
                        } else {
                            zbz += '             <div class="answer">\n' +
                                '                        <div name="checked' + question_Index + '" class="answer_Checkbox" id="' + data.list[i].answerList[j].aid + '"><img width="24" src="../../../page/photo/gou.png" alt=""></div>\n' +
                                '                        <div class="answer_Content">' + data.list[i].answerList[j].answer + '</div>\n' +
                                '                    </div>';
                        }
                    }
                    question_Index++;

                    question_coll +=
                        '            <div class="question_content">\n' +
                        question +
                        '                <div class="answer_coll">\n' +
                        zbz +
                        '                </div>\n' +
                        '        </div>';
                    index++;

                    // alert(question_coll);
                }
                $('.question_coll').append(question_coll);
                $('.answer_Radio').on('click', radioClick);
                $('.answer_Checkbox').on('click', checkClick);
                form.render('radio');//重新绘制表单，让修改生效
        }
    });



