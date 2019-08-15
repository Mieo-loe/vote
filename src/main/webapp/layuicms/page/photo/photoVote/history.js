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
            , url: $tool.getContext() + 'photoVote/photohistory.do' //数据接口
            , method: 'post'
            , page:true //开启分页
            ,limit:5
            ,limits:[5,10,15,20]
            ,cols: [[ //表头
                {type:'numbers',title:'序号',fixed: 'left'}
                ,{field: 'vid', title: '标题', width: '30%'}
                , {field: 'issueTime', title: '发布时间', width: '20%'}
                , {field: 'status', title: '状态', width: '10%',templet: '#tmp'}
                , {fixed: 'right', title: '操作', width: 250, align: 'center', toolbar: '#barDemo'} //这里的toolbar值是模板元素的选择器
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
                delUser(row.hid);
            } else if (layEvent === 'editStatus') { //编辑
                //do something
                editUser(row.hid);
            }else if(layEvent === 'reading'){//密码初始化
                reading(row.hid);
            }else if(layEvent === 'sumNumber'){//密码初始化
                sumNumber(row.hid);
            }
        });
    }
    defineTable();


    //查询
    form.on("submit(queryUser)", function (data) {
        var status = data.field.status;
        var loginName = data.field.loginName;
        var realName = data.field.realName;


        //表格重新加载
        tableIns.reload({
            where:{
                status:status,
                loginName:loginName,
                realName:realName
            }
        });

        return false;
    });

    //添加用户
    $(".add_btn").click(function () {
        var index = layui.layer.open({
            title: "创建空白模板",
            type: 2,
            content: "vote.html",
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
    function delUser(hid){
        layer.confirm('确认删除吗？', function (confirmIndex) {
            layer.close(confirmIndex);//关闭confirm
            //向服务端发送删除指令
            var req = {
                hid: hid
            };

            $api.DeleteUser2(req,function (data) {
                layer.msg("删除成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }

    //查看
    function reading(hid){

        layer.prompt({title: '请输入账号',formType: 0}, function(content, index){
            // layer.close(index);
            layer.msg('您输入的账号为：' + content);

            var req = {
                content: content,
                hid:hid
            };
            var hh = JSON.stringify(req);
            // alert(hh);
            window.sessionStorage.setItem("aaa",hh);
            $api.cheakedAccount(req,{},function (data) {
                //top.layer.close(index);(关闭遮罩已经放在了ajaxExtention里面了)
                // alert(data.data);

                layer.close(index);
                // alert(data.msg=="success");
                if (data.data=="success"){
                layer.msg("发布添加成功！", {time: 1000}, function () {
                    var index = layui.layer.open({
                        title: "使用模板",
                        type: 2
                        ,
                        content: "reading.html?hid="+hid,
                        success: function (layero, index1) {
                            setTimeout(function () {
                                layui.layer.tips('点击此处返回菜单列表', '.layui-layer-setwin .layui-layer-close', {
                                    tips: 3
                                });
                                layui.layer.full(index1);
                            })
                        }
                    });
                });
                }else {
                    layer.msg("你没有投票资格！", {time: 1000});
                }
            },function (data) {


            });

        //改变窗口大小时，重置弹窗的高度，防止超出可视区域（如F12调出debug的操作）


        });
    }
    //统计
    function sumNumber(hid){
            var req = {
                hid:hid
            };
            $api.sumNumber(req,{},function (data) {
                    layer.msg("统计答案数量！", {time: 1000}, function () {
                        var index = layui.layer.open({
                            title: "使用模板",
                            type: 2,
                            content: "sumNumber.html?hid="+hid,
                            success: function (layero, index1) {
                                setTimeout(function () {
                                    layui.layer.tips('点击此处返回菜单列表', '.layui-layer-setwin .layui-layer-close', {
                                        tips: 3
                                    });
                                    layui.layer.full(index1);
                                })
                            }
                        });
                    });
            },function (data) {


            });

            //改变窗口大小时，重置弹窗的高度，防止超出可视区域（如F12调出debug的操作）


    }
    //编辑状态
    function editUser(hid){
        layer.confirm('确认取消发布吗？', function (confirmIndex) {
            layer.close(confirmIndex);//关闭confirm
            //向服务端发送删除指令
            var req = {
                hid: hid
            };

            $api.EditStatus(req,function (data) {
                layer.msg("取消成功",{time:1000},function(){
                    //obj.del(); //删除对应行（tr）的DOM结构
                    //重新加载表格
                    tableIns.reload();
                });
            });
        });
    }
});