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
    /**
     * 页面初始化
     * */
    function init() {
        //初始化下拉框
        initParentMenu();
    }

    init();

    /**
     * 初始化下拉框
     * */
    function initParentMenu() {
        $api.GetFirstClassMenus(null,function (res) {
            var data = res.data;
            if (data.length > 0) {
                var html = '<option value="">--请选择--</option>';
                for (var i = 0; i < data.length; i++) {
                    html += '<option value="' + data[i].id + '">' + data[i].title + '</option>>';
                }
                $('#parentMenu').append($(html));
                form.render();
            }
        });
    }

    /**
     * 监听radio选择
     * */
    form.on('checkbox(menuTypeFilter1)', function (data) {
        //console.log(data.elem); //得到radio原始DOM对象
        var value = data.value;
        if ('37' === value) {//二级菜单
            $('.parent-menu1').removeClass('layui-hide');
            $('.parent-menu1').addClass('layui-anim-up');
        }else{
            $('.parent-menu1').addClass('layui-hide');
            $('.parent-menu1').removeClass('layui-anim-up');
        }
    });
    form.on('checkbox(menuTypeFilter2)', function (data) {
        //console.log(data.elem); //得到radio原始DOM对象
        var value = data.value;
        if ('38' === value) {//二级菜单
            $('.parent-menu2').removeClass('layui-hide');
            $('.parent-menu2').addClass('layui-anim-up');
        }else{
            $('.parent-menu2').addClass('layui-hide');
            $('.parent-menu2').removeClass('layui-anim-up');
        }
    });
    form.on('checkbox(menuTypeFilter3)', function (data) {
        //console.log(data.elem); //得到radio原始DOM对象
        var value = data.value;
        if ('39' === value) {//二级菜单
            $('.parent-menu3').removeClass('layui-hide');
            $('.parent-menu3').addClass('layui-anim-up');
        }else{
            $('.parent-menu3').addClass('layui-hide');
            $('.parent-menu3').removeClass('layui-anim-up');
        }
    });
    form.on('checkbox(menuTypeFilter4)', function (data) {
        //console.log(data.elem); //得到radio原始DOM对象
        var value = data.value;
        if ('40' === value) {//二级菜单
            $('.parent-menu4').removeClass('layui-hide');
            $('.parent-menu4').addClass('layui-anim-up');
        }else{
            $('.parent-menu4').addClass('layui-hide');
            $('.parent-menu4').removeClass('layui-anim-up');
        }
    });
    form.on('checkbox(menuTypeFilter5)', function (data) {
        //console.log(data.elem); //得到radio原始DOM对象
        var value = data.value;
        if ('41' === value) {//二级菜单
            $('.parent-menu5').removeClass('layui-hide');
            $('.parent-menu5').addClass('layui-anim-up');
        }else{
            $('.parent-menu5').addClass('layui-hide');
            $('.parent-menu5').removeClass('layui-anim-up');
        }
    });


    /**
     * 表单提交
     * */
    form.on("submit(addDfmuban)", function (data) {
        var title = data.field.title;
        var explain = data.field.explain;
        var peonum = data.field.peonum;

        var arr = new Array();
        var arr1 = new Array();
        var names = $("[name = 'rubric_Id']");
        var names1 = $("[name = 'res_Id']");

        names.each(function(index,item){
           arr.push($(item).val());
        });

        names1.each(function(index,item){
            arr1.push($(item).val());
        });
        //请求
        var req = {
            title:title,
            explain:explain,
            peonum:peonum,
            arr:arr.toString(),
            arr1:arr1.toString()

        };

        $api.AddDfmuban(req,function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            layer.msg("模板创建成功！", {time: 1000}, function () {
                layer.closeAll("iframe");
                //刷新父页面
                parent.location.reload();
            });
        });

        return false;
    })

});


