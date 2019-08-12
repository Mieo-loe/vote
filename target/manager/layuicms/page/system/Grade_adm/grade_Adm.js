layui.config({
    base: $config.resUrl+'layuicms/common/js/'//定义基目录
}).extend({
    ajaxExtention: 'ajaxExtention',//加载自定义扩展，每个业务js都需要加载这个ajax扩展
    $tool: 'tool',
    $api:'api'
}).use(['form', 'layer', 'jquery', 'table', 'laypage', 'ajaxExtention', '$tool','$api'], function () {
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        $ = layui.jquery,
        laypage = layui.laypage,
        $tool = layui.$tool,
        table = layui.table,
        $api = layui.$api;

    var uid = new Array();

    var tableIns;//表格实例
    /**
     * 页面初始化
     * */
    function init() {

    }
    init();
    // layer.ready(function(){
    //     layer.msg('很高兴一开场就见到你');
    // });
    /**
     * 定义表格
     * */
    function defineTable() {
        tableIns = table.render({
            elem: '#adm-data'
            , id: 'adm_Id,res_Id'
            , height: 350
            , url: $tool.getContext() + 'dfmuban/dfmubanPage.do' //数据接口
            , method: 'post'
            , limit: 5
            , limits: [5,6,7,8,9,10]
            , page: true //开启分页
            , cols: [[ //表头
                  {type:'numbers',title:'序号',fixed: 'left'},
                  {field: 'a_time', title: '生成日期'}
                , {field: 'templet_title', title: '模板标题'}
                , {fixed: 'right', title: '操作', width: 400, align: 'center', toolbar: '#barDemo'} //这里的toolbar值是模板元素的选择器
            ]]
            , done: function (res, curr) {//请求完毕后的回调

                //如果是异步请求数据方式，res即为你接口返回的信息.curr：当前页码
            }
        });

        //为toolbar添加事件响应
        table.on('tool(menuFilter)', function (obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var row = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
            var tr = obj.tr; //获得当前行 tr 的DOM对象

            //区分事件
            if (layEvent === 'del') { //删除
                delMenu(row.admId);
            } else if (layEvent === 'yulan') { //预览
                //do something
                yulan(row.admId);
            } else if (layEvent === 'edit') { //使用
                //do something
                editMenu(row.admId);
            } else if (layEvent === 'zhiding') { //置顶
                //do something
                zhiding(row.admId);
            } else if (layEvent === 'qxzhiding') { //置顶
                //do something
                qxzhiding(row.admId);
            }
        });
    }
    defineTable();

    //查询
    form.on("submit(queryAdm)", function (data) {
        var adm_Id = data.field.admId;
        console.log(tableIns)
        //表格重新加载
        tableIns.reload({
            where:{
                adm_Id:adm_Id
            }
        });
        return false;
    });

    //创建模板
    $(".usersAdd_btn").click(function () {
        var index = layui.layer.open({
            title: "创建模板",
            type: 2,
            content: "../../../page/system/GradeRecord/addRecord.html",
            success: function (layero, index) {
                setTimeout(function () {
                    layui.layer.tips('点击此处返回评测打分模板', '.layui-layer-setwin .layui-layer-close', {
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
    function delMenu(adm_Id){
        layer.confirm('确认删除吗？', function (confirmIndex) {
            layer.close(confirmIndex);//关闭confirm
            //向服务端发送删除指令
            var req = {
                adm_Id: adm_Id
            };

            $api.DeleteMuban(req,function (data) {
                layer.msg("删除成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }

    //使用
    function editMenu(adm_Id){
        var index = layui.layer.open({
            title: "使用模板",
            type: 2,
            content: "../../../page/system/Grade_adm/editRecord.html?adm_Id="+adm_Id,
            success: function (layero, index) {
                setTimeout(function () {
                    layui.layer.tips('点击此处返回模板管理', '.layui-layer-setwin .layui-layer-close', {
                        tips: 3
                    });
                }, 500)
            },
            // end:function () {
            //     var req ={
            //         adm_Id:adm_Id,
            //     };
            //     $api.GetTemplet(req,function (res) {
            //         var data = res.data;
            //         uid = data.uid;
            //     });
            //     var qq ={
            //         uid:uid.toString(),
            //     }
            //     $api.Addrenyuan(qq,function (data) {});
            // }
        });

        //改变窗口大小时，重置弹窗的高度，防止超出可视区域（如F12调出debug的操作）
        $(window).resize(function () {
            layui.layer.full(index);
        });
        layui.layer.full(index);
    }

    //预览
    function yulan(adm_Id){
        var index = layui.layer.open({
            title: "预览",
            type: 2,
            content: "../../../page/system/Grade_adm/DaFenBiao.html?adm_Id="+adm_Id,
            success: function (layero, index) {
                setTimeout(function () {
                    layui.layer.tips('点击此处返回模板管理', '.layui-layer-setwin .layui-layer-close', {
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

    //置顶
    function zhiding(adm_Id) {
        layer.confirm('确定要置顶吗？', function (confirmIndex) {
            layer.close(confirmIndex);//关闭confirm
            //向服务端发送删除指令
            var req = {
                adm_Id: adm_Id
            };

            $api.ZhiDing(req,function (data) {
                layer.msg("置顶成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }

    //置顶
    function qxzhiding(adm_Id) {
        layer.confirm('确定要取消置顶吗？', function (confirmIndex) {
            layer.close(confirmIndex);//关闭confirm
            //向服务端发送删除指令
            var req = {
                adm_Id: adm_Id
            };

            $api.QXZhiDing(req,function (data) {
                layer.msg("取消置顶成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }


});
