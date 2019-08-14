layui.config({
    base: $config.resUrl+'layuicms/common/js/'//定义基目录
}).extend({
    ajaxExtention: 'ajaxExtention',//加载自定义扩展，每个业务js都需要加载这个ajax扩展
    $tool: 'tool',
    $api:'api'
}).use(['form', 'layer', '$api','jquery', 'table', 'laypage','laytpl', 'ajaxExtention', '$tool','$api','upload'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        $ = layui.jquery,
        laypage = layui.laypage,
        laytpl = layui.laytpl,
        $tool = layui.$tool,
        table = layui.table,
        $api = layui.$api;
    upload=layui.upload;

    var tableIns;//表格实例

    /**
     * 页面初始化
     * */
    function init() {

        //初始化下拉框
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

    }
    init();



    /**
     * 定义表格
     * */
    function defineTable() {
        tableIns = table.render({
            elem: '#user-data'
            , height: 415
            , url: $tool.getContext() + 'UserTable/userTable.do' //数据接口
            , method: 'post'
            , page:true //开启分页
            ,limit:5
            ,limits:[5,10,15,20]
            ,cols: [[ //表头
                {type:'numbers',title:'序号',fixed: 'left'}
                ,{field: 'uname', title: '姓名', width: '10%'}
                , {field: 'sex', title: '性别', width: '10%'}
                , {field: 'departmentId', title: '部门', width: '10%'}
                , {field: 'classOfPosition', title: '职级', width: '10%'}
                , {field: 'position', title: '职位', width: '10%'}
                , {field: 'gradeOfJudge', title: '法官等级', width: '10%'}
                , {field: 'category', title: '所属类别', width: '10%'}
                , {fixed: 'right', title: '操作', width: 200, align: 'center', toolbar: '#barDemo'} //这里的toolbar值是模板元素的选择器
            ]]
            , done: function (res, curr) {//请求完毕后的回调
                //如果是异步请求数据方式，res即为你接口返回的信息.curr：当前页码
            }
        });

        //为toolbar添加事件响应
        table.on('tool(userFilter)', function (obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var row = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
            var tr = obj.tr; //获得当前行 tr 的DOM对象

            //区分事件
            if (layEvent === 'del') { //删除
                delUser(row.uid);
            } else if (layEvent === 'edit') { //编辑
                //do something
                editUser(row.uid);
            }
        });
    }
    defineTable();


    //查询
    form.on("submit(queryUser)", function (data) {
        var uname = data.field.uname;
        var sex = data.field.sex;
        var classOfPosition = data.field.classOfPosition;
        var departmentId = data.field.departmentId;
        var position = data.field.position;
        var gradeOfJudge = data.field.gradeOfJudge;
        var category = data.field.category;

        //表格重新加载
        tableIns.reload({
            where:{
                uname:uname,
                sex:sex,
                classOfPosition:classOfPosition,
                departmentId:departmentId,
                position:position,
                gradeOfJudge:gradeOfJudge,
                category:category
            }
        });

        return false;
    });
    //添加用户
    $(".usersAdd_btn").click(function () {
        var index = layui.layer.open({
            title: "创建空白模板",
            type: 2,
            content: "addUser.html",
            success: function (layero, index) {
                setTimeout(function () {
                    layui.layer.tips('点击此处返回用户列表', '.layui-layer-setwin .layui-layer-close', {
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
    });
    //批量导入excel文件
    layui.use('upload', function () {
        var $ = layui.jquery
            , upload = layui.upload;
        var uploadInst = upload.render({

            elem: '#upfile'
            , url: '/vote/UserTable/fileUpload.do'
            , auto: false
            , accept: 'file'
            //,multiple: true
            , choose: function (obj) {
                layer.confirm('确认导入吗？', function (confirmIndex) {
                    obj.preview(function (index, file, result) {
                        var formData = new FormData();
                        //# 给formData对象添加<input>标签,注意与input标签的ID一致
                        formData.append('upfile', file);
                        $.ajax({
                            url: '/vote/UserTable/fileUpload.do',//这里写你的url
                            type: 'POST',
                            data: formData,
                            contentType: false,// 当有文件要上传时，此项是必须的，否则后台无法识别文件流的起始位置
                            processData: false,// 是否序列化data属性，默认true(注意：false时type必须是post)
                            //dataType: 'json',//这里是返回类型，一般是json,text等
                            //clearForm: true,//提交后是否清空表单数据
                            success: function () {   //提交成功后自动执行的处理函数，参数data就是服务器返回的数据。
                                layer.msg("导入成功", {time: 100}, function () {
                                    //重新加载表格
                                    tableIns.reload();
                                });
                            },
                            error: function (data, status, e) {  //提交失败自动执行的处理函数。
                                console.error(e);
                            }
                        });
                    });


                });
            }
            , done: function (res) {
                console.log(res)
            }
        });
    });


    //删除
    function delUser(uid){
        layer.confirm('确认删除吗？', function (confirmIndex) {
            alert(123);
            layer.close(confirmIndex);//关闭confirm
            //向服务端发送删除指令
            var req = {
                uid: uid
            };

            $api.DeleteUser1(req,function (data) {
                layer.msg("删除成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }

    //编辑
    function editUser(uid){
        alert(uid);
        var index = layui.layer.open({
            title: "编辑用户",
            type: 2,
            content: "editUser.html?uid="+uid,
            success: function (layero, index) {
                setTimeout(function () {
                    layui.layer.tips('点击此处返回用户列表', '.layui-layer-setwin .layui-layer-close', {
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
    }
});
