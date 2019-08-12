package com.gameloft9.demo.controllers.system;

import com.gameloft9.demo.dataaccess.model.system.SysOperLogTest;
import com.gameloft9.demo.dataaccess.model.system.TpGradeLogadm;
import com.gameloft9.demo.dataaccess.model.system.TpResourcesList;
import com.gameloft9.demo.mgrframework.annotation.BizOperLog;
import com.gameloft9.demo.mgrframework.beans.constant.OperType;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.PageResultBean;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.system.LogService;
import com.gameloft9.demo.service.api.system.SysOperLogService;
import com.gameloft9.demo.service.api.system.TpGradeLogadmService;
import com.gameloft9.demo.service.beans.system.LogBatchDelRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collection;
import java.util.List;

/**
 * 系统日志
 * Created by gameloft9 on 2017/12/14.
 */
@Slf4j
@Controller
@RequestMapping("/logadm")
public class TpGradeLogadmController {

    @Autowired
    TpGradeLogadmService tpGradeLogadmService;
    @Autowired
    LogService logService;

    /**
     * 获取所有日志列表
     * @param page 页序
     * @param limit 分页大小
     * */
    @RequestMapping(value = "/logList.do",method = RequestMethod.POST)
    @ResponseBody
    //@BizOperLog(operType = OperType.Query,memo = "获取所有日志列表")
    public IResult getLogList(String page, String limit, String loginName){
        //返回json至前端的均返回ResultBean或者PageResultBean
//        System.out.println(tpGradeLogadmService.getAll(page, limit, loginName));
        return new PageResultBean<Collection<TpGradeLogadm>>(tpGradeLogadmService.getAll(page,limit,loginName),tpGradeLogadmService.countGetAll(loginName));
    }

    /**
     * 批量删除
     * */
    @RequestMapping(value = "/batchDelete.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "批量删除日志", memos = "20")
    public IResult batchDelete(@RequestBody LogBatchDelRequest request){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Boolean>(tpGradeLogadmService.batchDelete(request));
    }

    /**
     * 删除
     * @param log_id 日志Id
     * */
    @RequestMapping(value = "/delete.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "删除日志", memos = "14")
    public IResult delete(Integer log_id){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Boolean>(tpGradeLogadmService.delete(log_id));
    }


    /**
     * 不再记录该类型的操作
     * */
    @RequestMapping(value = "/dellogs.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "不再记录操作", memos = "29")
    public IResult dellogs(Integer []ids){
        //返回json至前端的均返回ResultBean或者PageResultBean
        for (int i = 0; i < ids.length; i++) {
//            System.out.println(ids[i]);
            logService.delLog(ids[i]);
        }
        return new ResultBean<String>("success");
    }

    /**
     * 获取当前的操作
     */
    @RequestMapping(value = "/getlog.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getlog(){
        return new ResultBean<List<TpResourcesList>>(logService.getLog());
    }

    /**
     * 添加操作
     */
    @RequestMapping(value = "/addlogs.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.ADD,memo = "添加记录操作", memos = "33")
    public IResult addlog(String resKind, Integer resNum, String resName){

        TpResourcesList resourcesList = new TpResourcesList(resKind,resNum,resName);
        return new ResultBean<Boolean>(logService.addLog(resourcesList));
    }

}
