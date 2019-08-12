package com.gameloft9.demo.controllers.system;
import com.gameloft9.demo.dataaccess.model.system.TpQueFramework;
import com.gameloft9.demo.dataaccess.model.system.TpQueOrgNodeResponse;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.system.TpQueFrameworkService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collection;

/**
 * 组织机构
 * Created by gameloft9 on 2017/12/19.
 */
@Controller
@Slf4j
@RequestMapping("/wjdc")
public class TpQueFrameworkController {

    @Autowired
    TpQueFrameworkService frameworkService;

    /**
     * 获取所有组织机构
     * */
    @RequestMapping(value = "/getAllQue.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getAll(){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Collection<TpQueOrgNodeResponse>>(frameworkService.getAll());
    }

    /**
     * 获取组织机构
     * */
    @RequestMapping(value = "/getQue.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult get(String fid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<TpQueFramework>(frameworkService.getById(fid));
    }

    /**
     * 更新组织机构
     * @param org 组织机构信息
     * */
    @RequestMapping(value = "/updateQue.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult update(TpQueFramework org){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Boolean>(frameworkService.update(org));
    }

    /**
     * 删除组织机构
     * @param fid 组织机构id
     * */
    @RequestMapping(value = "/deleteQue.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult delete(String fid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Boolean>(frameworkService.deleteById(fid));
    }

    /**
     * 添加组织机构
     * @param org 组织机构信息
     * */
    @RequestMapping(value = "/addQue.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult add(TpQueFramework org){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Boolean>(frameworkService.add(org));
    }

}
