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

    var record_Id;
    var user;
    var uid = new Array();
    var resId = new Array();
    var fenshu = new Array();


    /**
     * 页面初始化
     * */
    function init() {
        load();
    }

    init();

    /**
     * 初始化
     */
    function load() {

        var queryArgs = $tool.getQueryParam();
        record_Id = queryArgs['record_Id'];
        var req = {
            record_Id: record_Id,
        }
        $api.GetShuJu(req, function (res) {
            var data = res.data;
            uid = data.uid;
            resId = data.resId;
            fenshu = data.fenshu;
            // console.log(data);

            var a = 0;

            var li1 = '<li id="kong"></li>';

            $('.tmson').append($(li1));
            for (var x = 0; x < resId.length; x++) {
                if (resId[x] == 37) {
                    var de = '<li class="tm" id="de"><h1>德:</h1></li>';
                    $('.tmson').append($(de));
                } else if (resId[x] == 38) {
                    var neng = '<li class="tm" id="neng"><h1>能:</h1></li>';
                    $('.tmson').append($(neng));
                } else if (resId[x] == 39) {
                    var qin = '<li class="tm" id="qin"><h1>勤:</h1></li>';
                    $('.tmson').append($(qin));
                } else if (resId[x] == 40) {
                    var ji = '<li class="tm" id="ji"><h1>绩:</h1></li>';
                    $('.tmson').append($(ji));
                } else if (resId[x] == 41) {
                    var lian = '<li class="tm" id="lian"><h1>廉:</h1></li>';
                    $('.tmson').append($(lian));
                }
            };


            $api.GetUid(null, function (res) {
                var data = res.data;
                user = data;

                var li2 = '';

                var j = 0;
                var a1 = 0;
                for (var y = 0; y < data.length; y++) {
                    if (data[y].uid == uid[j]) {
                        li2 += '<ul class="renyuan">' +
                            '<li><h1>' + data[y].uname + '</h1></li>' +
                            '</ul>';
                        j++;
                    };
                };
                $('.son').append($(li2));
                for (var z = 0; z < uid.length; z++) {
                    var li3 = '';
                    for (var z1 = 0; z1 < resId.length; z1++) {
                        // console.log(fenshu[a]);
                        li3 += '<li><h1>' + fenshu[a] + '</h1></li>';
                        a = a + 1;
                    }
                    for (var z2 = 0; z2 < 5 - resId.length; z2++) {
                        li3 += '<li></li>';
                    }
                    $('.son .renyuan').eq(a1).append($(li3));
                    a1=a1+1;
                };
            });


        });


    };
});