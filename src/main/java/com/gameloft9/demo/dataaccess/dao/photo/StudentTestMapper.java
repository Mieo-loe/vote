package com.gameloft9.demo.dataaccess.dao.photo;

import com.gameloft9.demo.dataaccess.model.photo.StudentTest;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface StudentTestMapper {

    void deleteStudent(int sid);

    void addStudent(StudentTest studentTest);

    StudentTest findById(int sid);


   void update(StudentTest studentTest);



    /**
     * 分页获取菜单
     * */
    List<StudentTest> findAll(@Param("start") int start,
                                   @Param("end") int end,
                                   @Param("sid") Integer sid
                                   );

    /**
     * 获取菜单大小
     * */
    int countGetAll(@Param("sid") Integer sid);


}