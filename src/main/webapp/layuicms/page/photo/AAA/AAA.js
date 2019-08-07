layui.config({
    base: $config.resUrl+'layuicms/common/js/'//定义基目录
}).extend({
    ajaxExtention: 'ajaxExtention',//加载自定义扩展，每个业务js都需要加载这个ajax扩展
    $tool: 'tool',
    $api:'api'
}).use(['form','layer','upload','ajaxExtention','$tool','$api'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        $ = layui.jquery,
        upload = layui.upload,
        $tool = layui.$tool,
        $api = layui.$api;

    var user_roleIds =[];

    /**
     * 页面初始化
     * */
    function init() {
        //初始化用户信息
        // initUserInfo();
        //初始化上传控件
        initUploadComponent();
    }
    init();

    /**
     * 初始化上传控件
     * */
    function initUploadComponent() {
        //执行实例
        var uploadInst = upload.render({
            elem: '#userFaceUpload' //绑定元素
            ,url: $tool.getContext()+'photoVote/uploadphoto' //上传接口
            ,auto: false //选择文件后不自动上传
            ,bindAction: '#userInfoSubmit' //指向一个按钮触发上传
            ,accept:'images'
            ,multiple:true //设置多图片上传
            ,size:'10240'//限制大小,单位kb
            ,data:{type:'userFace'}//上传业务类型，后台会根据这个值将文件放入相应文件夹下
            ,choose:function (obj) {
                //预读本地文件，如果是多文件，则会遍历。(不支持ie8/9)
                obj.preview(function(index, file, result){
                    console.log(result);
                    //图片预览,result是图片base64编码
                    $('#userFace').css('background-image','url('+result+')');
                });
            }
            ,done: function(res){
                //上传完毕回调
                console.log(res);
            }
            ,error: function(){
                //请求异常回调
                layer.msg("上传失败");
            }
        });
    }


});