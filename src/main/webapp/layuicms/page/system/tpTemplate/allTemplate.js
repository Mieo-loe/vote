layui.config({
    base: $config.resUrl+'layuicms/common/js/'//定义基目录
}).extend({
    ajaxExtention: 'ajaxExtention',//加载自定义扩展，每个业务js都需要加载这个ajax扩展
    $tool: 'tool',
    $api:'api'
}).use(['form', 'layer','$api', 'jquery', 'table', 'laypage','laytpl', 'ajaxExtention', '$tool'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        $ = layui.jquery,
        laytpl = layui.laytpl,
        laypage = layui.laypage,
        $tool = layui.$tool,
        table = layui.table,
        $api = layui.$api;

    var tableIns;//表格实例
    /**
     * 定义表格
     * */
    function defineTable() {
        tableIns = table.render({
            elem: '#role-data'
            , height: 415
            , url: $tool.getContext() + 'template/list.do' //数据接口
            , method: 'post'
            , limit:'5'
            , limits:[5,10,15,20]
            , page:true //开启分页
            , cols: [[ //表头
                {type:'numbers',title:'序号',fixed: 'left'}
                , {field: 'templateTitle', title: '模板标题', width: '20%'}
                , {field: 'generateDate', title: '生成日期', width: '20%'}
                , {field: 'istop', title: '是否置顶', width: '20%'}
                , {fixed: 'right', title: '操作', width: 300, align: 'center', toolbar: '#barDemo'} //这里的toolbar值是模板元素的选择器
            ]]
            , done: function (res, curr) {//请求完毕后的回调
                //如果是异步请求数据方式，res即为你接口返回的信息.curr：当前页码
            }
        });

        //为toolbar添加事件响应
        table.on('tool(roleFilter)', function (obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var row = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
            var tr = obj.tr; //获得当前行 tr 的DOM对象

            //区分事件
            if (layEvent === 'del') { //删除
                console.log(row.templateId);
                delRole(row.templateId);
            }  else if (layEvent === 'use') { //编辑
                console.log(row.templateId);
                use(row.templateId);
            }else if (layEvent === 'qxzd') { //取消置顶
                //do something
                qxzd(row.templateTitle);
            }else if (layEvent === 'zd') { //置顶
                //do something
                zd(row.templateTitle);
            }
        });
    }
    defineTable();


    //查询
    form.on("submit(queryRole)", function (data) {
        var roleName = data.field.roleName;
        var isSuper = data.field.isSuper;

        //表格重新加载
        tableIns.reload({
            where:{
                roleName:roleName,
                isSuper:isSuper
            }
        });

        return false;
    });

    //添加角色
    $(".usersAdd_btn").click(function () {
        var index = layui.layer.open({
            title: "添加角色",
            type: 2,
            content: "addTemplate.html",
            success: function (layero, index) {
                setTimeout(function () {
                    layui.layer.tips('点击此处返回角色列表', '.layui-layer-setwin .layui-layer-close', {
                        tips: 3
                    });
                }, 500)
            }
        });
        //预览
        $(".lookAll").click(function () {
            var index = layui.layer.open({
                title: "预览",
                type: 2,
                content: "tp.html",
                success: function (layero, index) {
                    setTimeout(function () {
                        layui.layer.tips('点击此处返回角色列表', '.layui-layer-setwin .layui-layer-close', {
                            tips: 3
                        });
                    }, 500)
                }
            });
        });
        //改变窗口大小时，重置弹窗的高度，防止超出可视区域（如F12调出debug的操作）
        $(window).resize(function () {
            layui.layer.full(index);
        });
        layui.layer.full(index);
    });

    //删除
    function delRole(templateId){
        layer.confirm('确认删除吗？', function (confirmIndex) {
            layer.close(confirmIndex);//关闭confirm
            //向服务端发送删除指令
            var req = {
                templateId: templateId
            };

            $api.DeleteTemplate(req,function (data) {
                layer.msg("删除成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }
    //取消置顶
    function qxzd(templateTitle){
        layer.confirm('确定取消？', function (confirmIndex) {
            layer.close(confirmIndex);//关闭confirm
            //向服务端发送删除指令
            var req = {
                templateTitle: templateTitle
            };

            $api.qxzd(req,function (data) {
                layer.msg("取消成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }
    function zd(templateTitle) {
        layer.confirm('确定置顶？', function (confirmIndex) {
            layer.close(confirmIndex);//关闭confirm
            //向服务端发送删除指令
            var req = {
                templateTitle: templateTitle
            };

            $api.zd(req,function (data) {
                layer.msg("置顶成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }


    //编辑
    function use(templateId){
        var index = layui.layer.open({
            title: "编辑角色",
            type: 2,
            content: "useTemplate.html?templateId="+templateId,
            success: function (layero, index) {
                setTimeout(function () {
                    layui.layer.tips('点击此处返回角色列表', '.layui-layer-setwin .layui-layer-close', {
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