/**
 * api接口列表
 * Created by gameloft9 on 2018/7/19.
 */
layui.define(['$tool','jquery'], function (exports) {

    var $tool = layui.$tool,
        $ = layui.jquery;// 拿到模块变量

    /**
     * 封装一个post
     * */
    function doPost(url,req,successCallback,errorCallback) {
        $.ajax({
            url:url,
            data:req,
            method:"post",
            success:function (data) {
                successCallback(data);
            },
            error:function (error) {
                errorCallback(error);
            }
        });
    }

    /**
     * 封装一个get
     * */
    function doGet(url,req,successCallback,errorCallback) {
        $.ajax({
            url:url,
            data:req,
            method:"get",
            success:function (data) {
                successCallback(data);
            },
            error:function (error) {
                errorCallback(error);
            }
        });
    }

    /**
     * 封装一个支持更多参数的post
     * */
    function doComplexPost(url,req,config,successCallback,errorCallback) {
        var defaultConfig = {
            url:url,
            data:req,
            method:"post",
            success:function (data) {
                successCallback(data);
            },
            error:function (error) {
                errorCallback(error);
            }
        };
        var ajaxConfig = $.extend({},config,defaultConfig); // 合并参数

        $.ajax(ajaxConfig);
    }

    // API列表,工程庞大臃肿后可以将API拆分到单独的模块中
    var API = {
        Login: function(req,successCallback,errorCallback){ // 登录
            doPost($tool.getContext() + "login",req,successCallback,errorCallback);
        },
        LogOut:function(req,successCallback,errorCallback){ // 登出
            doPost($tool.getContext() + 'logout.do',req,successCallback,errorCallback);
        },
        ChangePwd:function(req,successCallback,errorCallback){ // 更改密码
            doPost($tool.getContext() + 'personCenter/changePwd.do',req,successCallback,errorCallback);
        },
        GetRoleList:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'personCenter/roleList.do',req,successCallback,errorCallback);
        },
        Verification:function(req,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'photoVote/verification.do',req,successCallback,errorCallback);
        },
        GetPhotoUserList:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'photoUser/photoUserList.do',req,successCallback,errorCallback);
        },
        GetStudentList:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'student/studentList.do',req,successCallback,errorCallback);
        },
        DeleteLog:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'log/delete.do',req,successCallback,errorCallback);
        },
        BatchDeleteLog:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'log/batchDelete.do',req,config,successCallback,errorCallback);
        },
        GetFirstClassMenus:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'menu/firstClassMenus.do',req,successCallback,errorCallback);
        },
        GetFirstPhoto:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'photoUser/find.do',req,successCallback,errorCallback);
        },
        //有请求方式和请求路径
        AddMenu:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'menu/add.do',req,successCallback,errorCallback);
        },
        DeleteMenu:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'menu/delete.do',req,successCallback,errorCallback);
        },
        GetMenu:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'menu/get.do',req,successCallback,errorCallback);
        },
        GetStudent:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'student/get.do',req,successCallback,errorCallback);
        },
        GetPhotoUser:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'photoUser/get.do',req,successCallback,errorCallback);
        },
        GetPhotoVote:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'photoVote/get.do',req,successCallback,errorCallback);
        },
        GetPhotoModel:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'photoModel/get.do',req,successCallback,errorCallback);
        },
        UpdateMenu:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext()+'menu/update.do',req,config,successCallback,errorCallback);
        },
        UpdateStudent:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext()+'student/update.do',req,config,successCallback,errorCallback);
        },
        UpdatePhotoUser:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext()+'photoUser/update.do',req,config,successCallback,errorCallback);
        },
        GetAllOrg:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'org/getAll.do',req,successCallback,errorCallback);
        },
        GetOrg:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'org/get.do',req,successCallback,errorCallback);
        },
        AddOrg:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'org/add.do',req,successCallback,errorCallback);
        },
        UpdateOrg:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'org/update.do',req,successCallback,errorCallback);
        },
        DeleteOrg:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'org/delete.do',req,successCallback,errorCallback);
        },
        AddRole:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'role/add.do',req,successCallback,errorCallback);
        },
        DeleteRole:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'role/delete.do',req,successCallback,errorCallback);
        },
        GetRole:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'role/get.do',req,successCallback,errorCallback);
        },
        UpdateRole:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'role/update.do',req,successCallback,errorCallback);
        },
        AddUser:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'sysUser/add.do',req,config,successCallback,errorCallback);
        },
        AddVote:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'photoVote/votePhoto.do',req,config,successCallback,errorCallback);
        },
        VoteSuccess:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'photoVote/voteSuccess.do',req,config,successCallback,errorCallback);
        },
        AddModelVote:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'photoModel/votePhoto.do',req,config,successCallback,errorCallback);
        },
        AddModel:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'photoModel/modelPhoto.do',req,config,successCallback,errorCallback);
        },
        AddStudent:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'student/add.do',req,config,successCallback,errorCallback);
        },
        AddPhotoUser:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'photoUser/add.do',req,config,successCallback,errorCallback);
        },
        DeleteUser:function(req,config,successCallback,errorCallback){
            doPost($tool.getContext() + 'sysUser/delete.do',req,config,successCallback,errorCallback);
        },
        DeleteVote:function(req,config,successCallback,errorCallback){
            doPost($tool.getContext() + 'photoVote/delete.do',req,config,successCallback,errorCallback);
        },
        DeleteModel:function(req,config,successCallback,errorCallback){
            doPost($tool.getContext() + 'photoModel/delete.do',req,config,successCallback,errorCallback);
        },
        CancelVote:function(req,config,successCallback,errorCallback){
            doPost($tool.getContext() + 'photoVote/cancel.do',req,config,successCallback,errorCallback);
        },
        CancelModel:function(req,config,successCallback,errorCallback){
            doPost($tool.getContext() + 'photoModel/cancel.do',req,config,successCallback,errorCallback);
        },
        TopModel:function(req,config,successCallback,errorCallback){
            doPost($tool.getContext() + 'photoModel/top.do',req,config,successCallback,errorCallback);
        },
        PhotoUser:function(req,config,successCallback,errorCallback){
            doPost($tool.getContext() + 'photoUser/deleteUser.do',req,config,successCallback,errorCallback);
        },
        AddMoreUser:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'photoUser/fileUpload.do',req,config,successCallback,errorCallback);
        },
        DeleteStudent:function(req,config,successCallback,errorCallback){
            doPost($tool.getContext() + 'student/delete.do',req,config,successCallback,errorCallback);
        },
        InitPwd:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'sysUser/initPwd.do',req,successCallback,errorCallback);
        },
        GetUser:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'sysUser/get.do',req,successCallback,errorCallback);
        },
        UpdateUser:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'sysUser/update.do',req,config,successCallback,errorCallback);
        },
        GetUserInfo:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'personCenter/get.do',req,successCallback,errorCallback);
        },
        UpdateUserInfo:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'personCenter/update.do',req,config,successCallback,errorCallback);
        }
    };




    //输出扩展模块
    exports('$api', API);
});


