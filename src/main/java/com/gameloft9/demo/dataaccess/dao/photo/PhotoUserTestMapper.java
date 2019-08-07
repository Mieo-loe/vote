package com.gameloft9.demo.dataaccess.dao.photo;

import com.gameloft9.demo.dataaccess.model.photo.PhotoDepartmentTest;
import com.gameloft9.demo.dataaccess.model.photo.PhotoUserTest;
import org.apache.ibatis.annotations.Param;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * 年: 2019
 * 月: 07
 * 日: 10
 * 小时: 15
 * 分钟: 45
 * @author 严脱兔
 */
public interface PhotoUserTestMapper {

    boolean insert(PhotoUserTest photoUserTest);

    String ajaxUploadExcel(HttpServletRequest request, HttpServletResponse response);

    void deleteUser(int uid);

    void addUser(PhotoUserTest photoUserTest);

    PhotoUserTest findById(int uid);

    List<PhotoDepartmentTest> selectdid();

    void update(PhotoUserTest photoUserTest);

    List<PhotoDepartmentTest>findDepartment();
    /**
     * 分页获取菜单
     * */
    List<PhotoUserTest> findAll(  @Param("start") Integer start,
                                @Param("end") Integer end,
                                @Param("uname") String uname,
                                @Param("departmentId") Integer  departmentId,
                                @Param("classOfPosition") Integer  classOfPosition,
                                @Param("position") Integer position,
                                @Param("gradeOfJudge") Integer gradeOfJudge,
                                @Param("category") Integer category

    );

    /**
     * 获取菜单大小
     * */
    int countGetAll();


}
