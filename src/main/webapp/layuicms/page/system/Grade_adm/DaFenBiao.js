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
    var ans_Id= new Array();

    var templet_Id = null;
    var title = null;
    var explains = null;

    var cs = 0;
    /**
     * 页面初始化
     * */
    function init() {
        //初始化页面
        initMuBanInfo();
    }

    init();


    /**
     * 初始化数据
     */
    function initMuBanInfo() {
        var queryArgs = $tool.getQueryParam();
        var adm_Id = queryArgs['adm_Id'];

        var req ={
            adm_Id:adm_Id,
        };
        // console.log(req)
        $api.GetAnsId(req, function (res) {
            var data = res.data;
            for (var a = 0;a<data.length; a++){
                ans_Id.push(data[a]);
            }
        })

        $api.GetTemplet(req,function (res) {
            var data = res.data;

            templet_Id = data.templet_Id;
            title = data.title;
            explains = data.explains;
            tmarr = data.tmarr;
            daarr = data.daarr;
            tm = data.tm;
            var uids = data.uid;

            for (var a=0; a<uids.length; a++){
                if (/^\d+$/.test(uids[a])){
                    uid.push(uids[a]);
                }
            }
            loadtitle(title);
            loadexplain(explains);
            loadUid(uid);
            loadTM(tm, tmarr, daarr);
        });
    }

    function loadtitle(title) {
        var html = '<h1>'+title+'</h1>';
        $(".title").append($(html));
    }

    function loadexplain(explains) {
        var html = '<p>'+explains+'</p>';
        $(".desc").append($(html));
    }

    function loadTM(tm, tmarr){
        var li1 = '<li id="kong"></li>';
        $('.pgood').append($(li1));
        for (var a = 0; a<tm.length; a++){
            if(tm[a]==37){
                var de = '';
                de += '<li id="de"></li>'
                $('.pgood').append($(de));
                $("#de").html('德('+tmarr[a]+')')
            } else if(tm[a]==38){
                var neng = '';
                neng += '<li id="neng"></li>'
                $('.pgood').append($(neng));
                $("#neng").html('能('+tmarr[a]+')')
            } else if(tm[a]==39){
                var qin = '';
                qin += '<li id="qin"></li>'
                $('.pgood').append($(qin));
                $("#qin").html('勤('+tmarr[a]+')')
            } else if(tm[a]==40){
                var ji = '';
                ji += '<li id="ji"></li>'
                $('.pgood').append($(ji));
                $("#ji").html('绩('+tmarr[a]+')')
            } else if(tm[a]==41){
                var lian = '';
                lian += '<li id="lian"></li>'
                $('.pgood').append($(lian));
                $("#lian").html('廉('+tmarr[a]+')')
            }
        }
    }

    function loadUid() {
        $api.GetUid(null,function (res) {
            var data = res.data;
            if (data.length > 0) {
                var html = '';
                var j = 0;
                var f = 0;
                for (var i = 0; i < data.length; i++) {
                    if(data[i].uid == uid[j]) {
                        html += '<ul class="pname">' +
                            '<li>' + data[i].uname + '</li>' +
                            '</ul>';
                        j++;
                    }
                }

                $('.main').append($(html));

                for(var d=0;d<data.length;d++){
                    var li = '';
                    var li1 = '';
                    var x = tm[0];
                    var y = 0;
                    var c = 0;
                    for (var z = 0; z<5; z++){
                        // console.log(tm[y]);
                        // console.log(x);
                        if (tm[y] == x) {
                            li += '<li>' +
                                '<div class="radioId"><input type="radio" class="checked" name="da'+f+'" value="'+ans_Id[c]+'">高&emsp;</div>' +
                                '<div class="radioId"><input type="radio" class="checked" name="da'+f+'" value="'+ans_Id[c+1]+'">较高</div>' +
                                '<div class="radioId"><input type="radio" class="checked" name="da'+f+'" value="'+ans_Id[c+2]+'">一般</div>' +
                                '<div class="radioId"><input type="radio" class="checked" name="da'+f+'" value="'+ans_Id[c+3]+'">较差</div>' +
                                '</li>';
                            x++;
                            y++;
                            c=c+4;
                            f++;
                        } else {
                            li1 += '<li>' +
                                '<div class="radioId"></div>' +
                                '<div class="radioId"></div>' +
                                '<div class="radioId"></div>' +
                                '<div class="radioId"></div>' +
                                '</li>';
                            x++;
                            if (y>0){
                                y = y-1;
                            }
                            y++;
                        }
                    }
                    $($('.pname')[d]).append($(li));
                    $($('.pname')[d]).append($(li1));
                    cs=f;
                }
            }
        });
    }


    form.on("submit(tijiao)", function (data) {

        var answer_Id = new Array();
        $('.checked:checked').each(function () {
            answer_Id.push($(this).val());
        });

    });

});