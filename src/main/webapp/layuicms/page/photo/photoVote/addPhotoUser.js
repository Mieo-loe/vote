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
        // //初始化下拉框
        // initPhotoUser();
        //加载角色列表
        loadRoleList();
    }
    init();
//初始化下拉框
    $api.GetFirstPhoto(null,function (res) {
        var data = res.data;
        if(data.length > 0){
            var html = '<option value="">--请选择--</option>';
            for(var i=0;i<data.length;i++){
                html += '<option value="'+data[i].departmentId+'">'+data[i].departmentName+'</option>>';
            }
            $('#departmentId').append($(html));
            form.render();
        }
    });

    /**
     * 初始化下拉框
     * */
    // function initPhotoUser() {
    //     $api.GetFirstPhoto(null,function (res) {
    //         var data = res.data;
    //         if (data.length > 0) {
    //             var html = '<option value="">--请选择--</option>';
    //             for (var i = 0; i < data.length; i++) {
    //                 html += '<option value="' + data[i].id + '">' + data[i].title + '</option>>';
    //             }
    //             $('#parentMenu').append($(html));
    //             form.render();
    //         }
    //     });
    // }

    /**
     * 加载角色列表
     * */
    function loadRoleList() {
        var req = {
            page: 1,
            limit: 999
        };


        $api.GetPhotoUserList(req,function (res) {
            var data = res.data;
            if (data.length > 0) {
                var roleHtml = "";
                for (var i = 0; i < data.length; i++) {
                    roleHtml += '<input type="checkbox" name="' + data[i].id + '" title="' + data[i].sname + '">';
                    roleIdList.push(data[i].id);//保存id列表
                }

                $('.role-check-list').append($(roleHtml));
                form.render();//重新绘制表单，让修改生效
            }
        });
    }

    /**
     * 表单提交
     * */
    form.on("submit(addPhotoUser)", function (data) {
        var uname = data.field.uname;
        var sex = data.field.sex;
        var departmentId = data.field.departmentId;
        var position = data.field.position;
        var classOfPosition = data.field.classOfPosition;
        var gradeOfJudge = data.field.gradeOfJudge;
        var category = data.field.category;


        //获取选中的角色列表
        for (var i = 0; i < roleIdList.length; i++) {
            if (data.field[roleIdList[i]] === 'on') {
                idList.push(roleIdList[i]);
            }
        }

        //请求
        var req = {
            uname: uname,
            sex: sex,
            departmentId: departmentId,
            position: position,
            classOfPosition: classOfPosition,
            gradeOfJudge: gradeOfJudge,
            category: category

        };

        $api.AddPhotoUser(JSON.stringify(req),{contentType:"application/json;charset=UTF-8"},function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            layer.msg("用户添加成功！", {time: 1000}, function () {
                layer.closeAll("iframe");
                //刷新父页面
                parent.location.reload();
            });
        });

        return false;
    })

});


