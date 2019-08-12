package com.gameloft9.demo.controllers.system;

import com.gameloft9.demo.dataaccess.model.system.TpPhotoUser;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.system.TpphotoUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collection;

@Slf4j
@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    TpphotoUserService tpphotoUserServiceimpl;
    @RequestMapping(value = "/list.do",method = RequestMethod.POST)
    @ResponseBody
    //@BizOperLog(operType = OperType.Query,memo = "获取所有角色列表")
    public IResult getdemorList(){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Collection<TpPhotoUser>>(tpphotoUserServiceimpl.findAllUser());
    }
}
