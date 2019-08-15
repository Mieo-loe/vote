package com.gameloft9.demo.dataaccess.dao.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.Department;
import com.gameloft9.demo.dataaccess.model.photovote.HistoryTest;
import com.gameloft9.demo.dataaccess.model.photovote.ResourceTest;
import com.gameloft9.demo.dataaccess.model.photovote.UserTable;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserTableMapper {

  List<UserTable> getAll(@Param("start") int start,
                         @Param("end") int end, @Param("uname")String uname,@Param("departmentId")Integer departmentId,@Param("classOfPosition")Integer classOfPosition,
                         @Param("position")Integer position,@Param("gradeOfJudge")Integer gradeOfJudge,
                         @Param("category")Integer category);
  int countGetAll();
   int  delete(int uid);
   UserTable findById(int uid);
   Boolean update(UserTable userTable);
//   Boolean add(UserTable userTable);
   List<Department> findDepart();
   int addUser(UserTable userTable);
   int updateUser(UserTable userTable);
    List<Department> selectdid();

//    List<ResourceTest> getResource();


}
