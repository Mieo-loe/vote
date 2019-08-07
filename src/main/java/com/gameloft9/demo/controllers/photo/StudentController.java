package com.gameloft9.demo.controllers.photo;

import com.gameloft9.demo.dataaccess.model.photo.StudentTest;
import com.gameloft9.demo.mgrframework.annotation.BizOperLog;
import com.gameloft9.demo.mgrframework.beans.constant.OperType;
import com.gameloft9.demo.mgrframework.beans.response.IResult;
import com.gameloft9.demo.mgrframework.beans.response.PageResultBean;
import com.gameloft9.demo.mgrframework.beans.response.ResultBean;
import com.gameloft9.demo.service.api.photo.StudentService;
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

/**
 * 系统菜单controller
 * Created by gameloft9 on 2017/12/4.
 */
@Controller
@Slf4j
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentServiceImpl;

    /**
     * 获取所有菜单列表
     * @param page 页序
     * @param limit 分页大小
     *  3.找到后台处理的控制器类
     * */
    @RequestMapping(value = "/studentList.do",method = RequestMethod.POST)
    @ResponseBody
    //@BizOperLog(operType = OperType.Query,memo = "获取所有菜单列表")
    public IResult findAll(String page, String limit,Integer sid){
        //1.接收参数
        //2.调用servie
        //3.返回结果(json数据)
        //返回json至前端的均返回ResultBean或者PageResultBean
        //PageResultBean<List<Student>>
        return new PageResultBean<Collection<StudentTest>>(studentServiceImpl.findAll(page,limit,sid),studentServiceImpl.countGetAll(sid));
    }

    /**
     * 添加学生
     * */
    @RequestMapping(value = "/add.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.ADD,memo = "添加学生")
    public IResult addStudent(@RequestBody StudentTest studentTest){
        System.out.println("dddd");
        //返回json至前端的均返回ResultBean或者PageResultBean

        return new ResultBean<String>(studentServiceImpl.addStudent(studentTest));
    }

    /**
     * 删除学生
     * */
    @RequestMapping(value = "/delete.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.DELETE,memo = "删除菜单")
    public IResult deleteStudent(int sid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        System.out.println("11111");
        return new ResultBean<Integer>(studentServiceImpl.deleteStudent(sid));
    }

    /**
     * 获取菜单
     * */
    @RequestMapping(value = "/get.do",method = RequestMethod.POST)
    @ResponseBody
    public IResult getMenu(int sid){
        //返回json至前端的均返回ResultBean或者PageResultBean
        System.out.println("1111");
        return new ResultBean<StudentTest>(studentServiceImpl.findById(sid));
    }

    /**
     * 更新菜单
     * @param id 菜单id
     * @param menuName 菜单名称
     * @param menuUrl 菜单访问链接
     * @param requestUrl 后台访问路径
     * @param idList 角色id列表
     * @param sort 排序号
     * */
    @RequestMapping(value = "/update.do",method = RequestMethod.POST)
    @ResponseBody
    @BizOperLog(operType = OperType.UPDATE,memo = "更新菜单")
    public IResult updateMenu(@RequestBody StudentTest studentTest){//传递了数组，前台放在payload里面了，后台通过@RequestBody获取
        //返回json至前端的均返回ResultBean或者PageResultBean
        return new ResultBean<String>(studentServiceImpl.update(studentTest));
    }


}
