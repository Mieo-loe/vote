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
        GetUid:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'yonghu/getuid.do',req,successCallback,errorCallback);
        },
        GetYongHu:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'yonghu/getyonghu.do',req,successCallback,errorCallback);
        },
        LoadRY:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'pingce/loadry.do',req,successCallback,errorCallback);
        },
        GetAdm:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'jilu/getAdm.do',req,successCallback,errorCallback);
        },
        FindZH:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'pingce/findzh.do',req,successCallback,errorCallback);
        },
        GetZH:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'pingce/getzh.do',req,successCallback,errorCallback);
        },
        DelZH:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'pingce/delzh.do',req,successCallback,errorCallback);
        },
        GetPosition:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'yonghu/getposition.do',req,successCallback,errorCallback);
        },
        AddMenu:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'menu/add.do',req,successCallback,errorCallback);
        },
        SetTJ:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'pingce/tongji.do',req,successCallback,errorCallback);
        },
        AddDaFen:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'pingce/add.do',req,successCallback,errorCallback);
        },
        Addrenyuan:function(req, successCallback,errorCallback){
            doPost($tool.getContext() + 'pingce/addry.do',req,successCallback,errorCallback);
        },
        AddYongHu:function(req, successCallback,errorCallback){
            doPost($tool.getContext() + 'yonghu/add.do',req,successCallback,errorCallback);
        },
        EditYongHu:function(req, successCallback,errorCallback){
            doPost($tool.getContext() + 'yonghu/edit.do',req,successCallback,errorCallback);
        },
        DeleteMenu:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'menu/delete.do',req,successCallback,errorCallback);
        },
        DeleteMuban:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'dfmuban/delete.do',req,successCallback,errorCallback);
        },
        ZhiDing:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'dfmuban/zhiding.do',req,successCallback,errorCallback);
        },
        QXZhiDing:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'dfmuban/qxzhiding.do',req,successCallback,errorCallback);
        },
        DeleteYongHu:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'yonghu/delete.do',req,successCallback,errorCallback);
        },
        DeleteJiLu:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'jilu/delete.do',req,successCallback,errorCallback);
        },
        GetShuJu:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'yonghu/getshuju.do',req,successCallback,errorCallback);
        },
        editStatus:function(req,successCallback,errorCallback){
            doPost($tool.getContext() + 'jilu/updatestatus.do',req,successCallback,errorCallback);
        },
        GetMenu:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'menu/get.do',req,successCallback,errorCallback);
        },
        GetTemplet:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'dfmuban/get.do',req,successCallback,errorCallback);
        },
        GetJIILU:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'dfmuban/getjilu.do',req,successCallback,errorCallback);
        },
        GetAnsId:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'dfmuban/getansId.do',req,successCallback,errorCallback);
        },
        UpdateMenu:function(req,config,successCallback,errorCallback){
            doComplexPost($tool.getContext()+'menu/update.do',req,config,successCallback,errorCallback);
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
        DeleteUser:function(req,config,successCallback,errorCallback){
            doPost($tool.getContext() + 'sysUser/delete.do',req,config,successCallback,errorCallback);
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
        },
        DaoChu:function(req,successCallback,errorCallback){
            doPost($tool.getContext()+'poi/daochu.do',req,successCallback,errorCallback);
        }
    };




    //输出扩展模块
    exports('$api', API);
});


