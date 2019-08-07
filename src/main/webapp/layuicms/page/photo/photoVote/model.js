layui.config({
    base: $config.resUrl+'layuicms/common/js/'//定义基目录
}).extend({
    ajaxExtention: 'ajaxExtention',//加载自定义扩展，每个业务js都需要加载这个ajax扩展
    $tool: 'tool',
    $api:'api'
}).use(['form', 'layer', '$api','jquery', 'table', 'laypage','laytpl', 'ajaxExtention', '$tool'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        $ = layui.jquery,
        laypage = layui.laypage,
        laytpl = layui.laytpl,
        $tool = layui.$tool,
        table = layui.table,
        $api = layui.$api;
        layer =layui.layer;
        layuiTable= layui.table;
    var tableIns;//表格实例

    /**
     * 页面初始化
     * */
    function init() {
    }
    init();

    /**
     * 定义表格
     * */
    function defineTable() {
        tableIns = table.render({
            elem: '#user-data'
            , height: 415
            , url: $tool.getContext() + 'photoModel/modelList.do' //数据接口
            , method: 'post'
            , page:true //开启分页
            , limit:5
            , limits:[5,6,7,8,9,10]
            , cols: [[ //表头
                  {type:'numbers',title:'',fixed: 'left'}
                , {field: 'modelTitle', title: '模板标题', width: '42%'}
                , {field: 'startTime', title: '生成日期', width: '41%'}
                , {fixed: 'right', title: '操作',  width: 251, align: 'left', toolbar: '#barDemo'} //这里的toolbar值是模板元素的选择器
            ]]
            , done: function (res, curr) {//请求完毕后的回调
                console.log('请求成功')
                console.log(res)
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
                del(row.mid);
            } else if (layEvent === 'edit') { //使用
                editVote(row.mid);
            } else if (layEvent === 'look') { //预览
                lookVote(row.mid);
            }
            else if (layEvent === 'cancel') { //取消置顶
               cancel(row.mid);
            }else if (layEvent === 'top') { //置顶
                top(row.mid);
            }
        });
    }
    defineTable();



    //创建模板
    $(".add_btn").click(function () {
        var index = layui.layer.open({
            title: "创建图片投票模板",
            type: 2,
            content: "addModel.html",
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

    //删除
    function del(mid){
        layer.confirm('确认删除吗？', function (confirmIndex) {
            layer.close(confirmIndex);//关闭confirm
            //向服务端发送删除指令
            var req = {
                mid: mid
            };
            $api.DeleteModel(req,function (data) {
                layer.msg("删除成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }

    //取消置顶
    function cancel(mid){
        layer.confirm('确认取消置顶吗？', function (confirmIndex) {
            layer.close(confirmIndex);//关闭confirm
            //向服务端发送关闭指令
            var req = {
                mid: mid
            };
            $api.CancelModel(req,function (data) {
                layer.msg("取消成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }


    //置顶
    function top(mid){
        layer.confirm('确认置顶吗？', function (confirmIndex) {
            layer.close(confirmIndex);//关闭confirm
            //向服务端发送关闭指令
            var req = {
                mid: mid
            };
            $api.TopModel(req,function (data) {
                layer.msg("置顶成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }

    //使用
    function editVote(mid){
        var index = layui.layer.open({
            title: "使用",
            type: 2,
            content: "editPhoto.html?mid="+mid,   //记得修改
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

    //预览
    function lookVote(mid){
        var index = layui.layer.open({
            title: "预览",
            type: 2,
            content: "lookVote.html?mid="+mid,   //记得修改
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