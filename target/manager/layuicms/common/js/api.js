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
        DeleteLog:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'log/delete.do',req,successCallback,errorCallback);
        },
        BatchDeleteLog:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'log/batchDelete.do',req,config,successCallback,errorCallback);
        },
        GetFirstClassMenus:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'menu/firstClassMenus.do',req,successCallback,errorCallback);
        },
        AddMenu:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'menu/add.do',req,successCallback,errorCallback);
        },
        DeleteMenu:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'menu/delete.do',req,successCallback,errorCallback);
        },
        GetMenu:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'menu/get.do',req,successCallback,errorCallback);
        },
        UpdateMenu:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext()+'menu/update.do',req,config,successCallback,errorCallback);
        },
        GetAllOrg:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'org/getAll.do',req,successCallback,errorCallback);
        },
        GetAllOrg2:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'wjdc/getAllQue.do',req,successCallback,errorCallback);
        },
        GetOrg:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'org/get.do',req,successCallback,errorCallback);
        },
        GetOrg2:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'wjdc/getQue.do',req,successCallback,errorCallback);
        },
        AddOrg:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'org/add.do',req,successCallback,errorCallback);
        },
        AddOrg2:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'wjdc/addQue.do',req,successCallback,errorCallback);
        },
        UpdateOrg:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'org/update.do',req,successCallback,errorCallback);
        },
        UpdateOrg2:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'wjdc/updateQue.do',req,successCallback,errorCallback);
        },
        DeleteOrg:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'org/delete.do',req,successCallback,errorCallback);
        },
        DeleteOrg2:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'wjdc/deleteQue.do',req,successCallback,errorCallback);
        },
        AddRole:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'role/add.do',req,successCallback,errorCallback);
        },
        AddWjdc:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'wjdc/add.do',req,config,successCallback,errorCallback);
        },
        AddTotal:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'wjdc/addTotal.do',req,config,successCallback,errorCallback);
        },
        AddTemplateTitle:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'wjdc/add6.do',req,config,successCallback,errorCallback);
        },
        findAccount:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'wjdc/findAccount.do',req,config,successCallback,errorCallback);
        },
        DeleteRole:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'role/delete.do',req,successCallback,errorCallback);
        },
        DeleteWJDC:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'wjdc/delete2.do',req,successCallback,errorCallback);
        },
        DeleteTem:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'wjdc/delete3.do',req,successCallback,errorCallback);
        },
        UpdateWJDC:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'wjdc/update2.do',req,successCallback,errorCallback);
        },
        UpdateTemplate1:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'wjdc/update5.do',req,successCallback,errorCallback);
        },
        UpdateTemplate2:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'wjdc/update5_1.do',req,successCallback,errorCallback);
        },
        FindById2:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'wjdc/findById2.do',req,successCallback,errorCallback);
        },
        GetRole:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'role/get.do',req,successCallback,errorCallback);
        },
        UpdateRole:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'role/update.do',req,successCallback,errorCallback);
        },
        templateUpdate:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'wjdc/update.do',req,successCallback,errorCallback);
        },
        AddUser:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext() + 'sysUser/add.do',req,config,successCallback,errorCallback);
        },
        DeleteUser:function(req,config,successCallback,errorCallback){
            doPost($tool.getContext() + 'sysUser/delete.do',req,config,successCallback,errorCallback);
        },
        InitPwd:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'sysUser/initPwd.do',req,successCallback,errorCallback);
        },
        GetUser:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'sysUser/get.do',req,successCallback,errorCallback);
        },
        GetForm:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'wjdc/getForm.do',req,successCallback,errorCallback);
        },
        GetForm2:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'wjdc/getForm2.do',req,successCallback,errorCallback);
        },
        GetTotal:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'wjdc/getTotal.do',req,successCallback,errorCallback);
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


