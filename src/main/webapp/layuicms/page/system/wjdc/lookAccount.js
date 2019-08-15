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

    /**
     * 初始化页面
     * */



    getRandomCode();
    function getRandomCode() {
        var queryArgs = $tool.getQueryParam();//获取查询参数
        var recordId = queryArgs['qid'];
        var account=[];
        $api.QueGetAccount({"recordId":recordId},function (data) {
            account=data.data;
            for (var i = 0; i < data.data.length; i++) {
                //遍历生成的账号并显示在页面
                var vv = "<div style=\"width: 20%;display: inline-block;text-align: center\">\n" +
                    "    <input type=\"text\" class=\"layui-input\" value='"+data.data[i].content+"' style=\"border:none;text-align: center\" readonly=\"true\">\n" +
                    "</div>"
                $('.account').append(vv);
            }
        });


        //导出
        form.on("submit(daochu)", function (data) {
            const zhanghao = [];
            //遍历生成的账号
            for (var i = 0; i < account.length; i++) {
                const json =
                    {
                        num:''+(i+1)+'',
                        content:''+account[i].content+''
                    }
                zhanghao.push(json);
            }

            //列标题，逗号隔开，每一个逗号就是隔开一个单元格
            let str = `序号,账号\n`;
            //增加\t为了不让表格显示科学计数法或者其他格式
            for(let i = 0 ; i < zhanghao.length ; i++ ){
                for(let item in zhanghao[i]){
                    str+=`${zhanghao[i][item] + '\t'},`;
                }
                str+='\n';
            }
            //encodeURIComponent解决中文乱码
            let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
            //通过创建a标签实现
            let link = document.createElement("a");
            link.href = uri;
            //对下载的文件命名
            link.download =  "账号表.csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            return false;
        })
    }

});
