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

    // var orgId;
    // var orgName;
    // var roleIdList = new Array();//所有的角色id列表

    /**
     * 页面初始化
     * */
    function init() {

        //初始化机构树
        // initOrgTree();
        //加载角色列表
        // loadRoleList();
        $api.GetFirstPhoto(null,function (res) {
            var data = res.data;
            if(data.length > 0){
                var html = '';
                for(var i=0;i<data.length;i++){
                    html += '<option value="'+data[i].fid+'">'+data[i].organization+'</option>>';
                }
                $('#departmentId').append($(html));
                form.render();
            }
        });
        initUserInfo();
    }

    init();

    /**
     * 初始化组织机构树
     * */
    function initUserInfo() {
        var queryArgs = $tool.getQueryParam();//获取查询参数
        var uid = queryArgs['uid'];

        var req = {
            uid:uid
        };

        $api.GetUserTable(req,function (res) {
            var data = res.data;
            // alert(JSON.stringify(data));
            $("[name='uname']").val(data.uname);
            // $("[name='sex']").val(data.sex);
            $("input:radio[value='"+data.sex+"']").attr('checked','true');
            // alert(data.departmentId);
            $("[name='classOfPosition']").val(data.classOfPosition);
            $("[name='departmentId']").val(data.departmentId);
            $("[name='position']").val(data.position);
            $("[name='gradeOfJudge']").val(data.gradeOfJudge);
            $("[name='category']").val(data.category);


            form.render();//重新绘制表单，让修改生效
        });
    }

    /**
     * 表单提交
     * */
    form.on("submit(editUser)", function (data) {
        var queryArgs = $tool.getQueryParam();//获取查询参数
        var uid = queryArgs['uid'];
        var uname = data.field.uname;
        var sex = data.field.sss;
        var classOfPosition = data.field.classOfPosition;
        var departmentId = data.field.departmentId;
        var position = data.field.position;
        var gradeOfJudge = data.field.gradeOfJudge;
        var category = data.field.category;

        // if($tool.isBlank(orgId)||$tool.isBlank(orgName)){
        //     layer.msg("请选择所属组织机构");
        //     return false;
        // }
        //
        // //获取选中的角色列表
        // for (var i = 0; i < roleIdList.length; i++) {
        //     if (data.field[roleIdList[i]] === 'on') {
        //         idList.push(roleIdList[i]);
        //     }
        // }

        //请求
        var req = {
            uid:uid,
            uname:uname,
            sex:sex,
            classOfPosition:classOfPosition,
            departmentId:departmentId,
            position:position,
            gradeOfJudge:gradeOfJudge,
            category:category
        };

        $api.UpdateUser1(JSON.stringify(req),{contentType:"application/json;charset=UTF-8"},function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            layer.msg("用户更新成功！", {time: 1000}, function () {
                layer.closeAll("iframe");
                //刷新父页面
                parent.location.reload();
            });
        });

        return false;
    })


    /**
     * 绘制树
     * @param id dom id
     * @param nodes 树节点数据
     * */
    function renderTree(id, nodes) {
        //绘制前先清空
        $(id).empty();

        //绘制
        layui.tree({
            elem: id
            , nodes: nodes
            , click: function (node) {//显示组织机构数据
                console.log(node); //node即为当前点击的节点数据
                orgId = node.id;//保存机构id
                orgName = node.name;
            }
        });
    }

    /**
     * 加载角色列表
     * */
    function loadRoleList() {
        var req = {
            page: 1,
            limit: 999
        };


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
     * */
    form.on("submit(addUser)", function (data) {
        var sname = data.field.sname;
        var sex = data.field.sex;
        var age = data.field.age;

        //请求
        var req = {
            sname: sname,
            sex: sex,
            age: age,

        };

        $api.AddUser(JSON.stringify(req),{contentType:"application/json;charset=UTF-8"},function (data) {
            //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
            layer.msg("学生添加成功！", {time: 1000}, function () {
                layer.closeAll("iframe");
                //刷新父页面
                parent.location.reload();
            });
        });

        return false;
    })

});


