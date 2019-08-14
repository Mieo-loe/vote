package com.gameloft9.demo.service.api.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.Department;
import com.gameloft9.demo.dataaccess.model.photovote.UserTable;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

public interface UserTableService {
//     Boolean add(UserTable userTable);
     Boolean delete(int sid);
    List<UserTable> getAll(String page, String limit,String uname,Integer departmentId,Integer classOfPosition,Integer position,Integer gradeOfJudge,
                           Integer category);
    int countGetAll();
//    Boolean  update(UserTable userTable);
    UserTable findById(int uid);
    List<Department>findDepart();
    int addUser(UserTable userTable);
    int updateUser(UserTable userTable);
    String ajaxUploadExcel(HttpServletRequest request, HttpServletResponse response);

//    List<ResourceTest> getResource();
}
