package com.gameloft9.demo.service.api.photo;

import com.gameloft9.demo.dataaccess.model.photo.PhotoDepartmentTest;
import com.gameloft9.demo.dataaccess.model.photo.PhotoUserTest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Created by gameloft9 on 2017/12/6.
 */
public interface PhotoUserService {
    int deleteUser(int uid);

    boolean insert(PhotoUserTest photoUserTest);

    String ajaxUploadExcel(HttpServletRequest request, HttpServletResponse response);

    String addUser(PhotoUserTest photoUserTest);

    PhotoUserTest findById(int uid);

    String update(PhotoUserTest photoUserTest);

    List<PhotoUserTest> findAll(String page, String limit, String uname,Integer departmentId,Integer classOfPosition,Integer position,Integer gradeOfJudge,Integer category);

    List<PhotoDepartmentTest>findDepartment();

    int countGetAll();
}
