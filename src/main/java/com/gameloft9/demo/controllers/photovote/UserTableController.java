package com.gameloft9.demo.controllers.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.Department;
import com.gameloft9.demo.dataaccess.model.photovote.HistoryTest;
import com.gameloft9.demo.dataaccess.model.photovote.UserTable;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.PageResultBean;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.photovote.HistoryService;
import com.gameloft9.demo.service.api.photovote.UserTableService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Collection;

@Slf4j
@Controller
@RequestMapping("/UserTable")
public class UserTableController {
    @Autowired
    UserTableService userTableServiceImpl;
    @RequestMapping(value = "/userTable.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult findAll(String page,String limit,String uname,Integer departmentId,Integer classOfPosition,Integer position,Integer gradeOfJudge,
                           Integer  category){

    return new PageResultBean<Collection<UserTable>>(userTableServiceImpl.getAll(page,limit,uname,departmentId,classOfPosition, position, gradeOfJudge,
            category),userTableServiceImpl.countGetAll());

    }
    @RequestMapping(value = "/delete.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult deleteUser(int uid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Boolean>(userTableServiceImpl.delete( uid ));
    }
    @RequestMapping(value = "/get.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getUser(int uid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<UserTable>(userTableServiceImpl.findById( uid ));
    }
    @RequestMapping(value = "/getDepart.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getDepart(){

        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<Collection<Department>>(userTableServiceImpl.findDepart());
    }
    @RequestMapping(value = "/update.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult update(@RequestBody UserTable userTable){
        userTableServiceImpl.updateUser( userTable );
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<String >("success");
    }
    @RequestMapping(value = "/add.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult addUser(@RequestBody UserTable userTable){
        userTableServiceImpl.addUser( userTable );
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<String >("success");
    }
    /**
     * 批量上传
     * */
    @ResponseBody
    @RequestMapping(value="/fileUpload.do")
    public String UploadExcel(HttpServletRequest request, HttpServletResponse response) throws Exception {
        return userTableServiceImpl.ajaxUploadExcel(request, response);

    }

}
