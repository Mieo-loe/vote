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
            , url: $tool.getContext()+'wjdc/findAll5.do' //数据接口
            , method: 'post'
            , page:true
            , limit:5
            , limits:[5,6,7,8,9,10]
            , cols: [[ //表头
                  {type:'numbers',title:'序号',fixed: 'left'},
                  {field: 'templateTitle', title: '模板标题', width: '35%'}
                , {field: 'createTime', title: '生成日期', width: '35%'}
                , {fixed: 'right', title: '操作', width: 290, align: 'left',toolbar: '#barDemo'} //这里的toolbar值是模板元素的选择器
            ]]
            //, done: function () {
            //    qid = $("[data-field='qid']").val();
           // }
            , done: function (res, curr) {//请求完毕后的回调
                //如果是异步请求数据方式，res即为你接口返回的信息.curr：当前页码
            }
        });
        var qid;
        //为toolbar添加事件响应
        table.on('tool(roleFilter)', function (obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var row = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
            var tr = obj.tr; //获得当前行 tr 的DOM对象
            //区分事件
            if (layEvent === 'del') { //删除
                delTemplate(row.tid);
            } else if (layEvent === 'edit1') { //置顶
                //do something
                editTemplate1(row.tid);
            }else if (layEvent === 'edit2') { //取消置顶
                //do something
                editTemplate2(row.tid);
            }else if (layEvent === 'editTemplate') { //使用
                //do something
                editTemplate3(row.tid);
            }else if (layEvent === 'preview') { //预览
                //do something
                preview(row.tid);
            }
        });
    }
    defineTable();

    //添加
    $(".usersAdd_btn").click(function () {
        var index = layui.layer.open({
            title: "创建模板",
            type: 2,
            content: "addTemplate.html",
            success: function (layero, index) {
                setTimeout(function () {
                    layui.layer.tips('点击此处返回', '.layui-layer-setwin .layui-layer-close', {
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
    //使用模板
    function editTemplate3(tid){
        var index = layui.layer.open({
            title: "使用模板",
            type: 2,
            content: "editTemplate.html?tid="+tid,
            success: function (layero, index) {
                setTimeout(function () {
                    layui.layer.tips('点击此处返回', '.layui-layer-setwin .layui-layer-close', {
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

    //删除
    function delTemplate(tid){
        layer.confirm('确认删除吗？', function (confirmIndex) {
            layer.close(confirmIndex);//关闭confirm
            //向服务端发送删除指令
            var req = {
                tid: tid
            };
            $api.DeleteTem(req,function (data) {
                layer.msg("删除成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }

    //置顶
    function editTemplate1(tid){
        layer.confirm('确认置顶吗？', function (confirmIndex) {
            layer.close(confirmIndex);//关闭confirm
            //向服务端发送删除指令
            var req = {
                tid: tid
            };
            $api.UpdateTemplate1(req,function (data) {
                layer.msg("置顶成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }
    //取消置顶
    function editTemplate2(tid){
        layer.confirm('确认取消置顶吗？', function (confirmIndex) {
           layer.close(confirmIndex);//关闭confirm
            //向服务端发送删除指令
            var req = {
                tid: tid
            };
            $api.UpdateTemplate2(req,function (data) {
                layer.msg("取消成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }

    //预览
    function preview(tid){
        var index = layui.layer.open({
            title: "预览",
            type: 2,
            content: "previewTem.html?tid="+tid,
            success: function (layero, index) {
                setTimeout(function () {
                    layui.layer.tips('点击此处返回', '.layui-layer-setwin .layui-layer-close', {
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