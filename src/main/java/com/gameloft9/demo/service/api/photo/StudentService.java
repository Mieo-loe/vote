package com.gameloft9.demo.service.api.photo;

import com.gameloft9.demo.dataaccess.model.photo.StudentTest;
import com.gameloft9.demo.service.beans.system.SysMenuTestExtend;

import java.util.List;

/**
 * Created by gameloft9 on 2017/12/6.
 */
public interface StudentService {
    int deleteStudent(int sid);

    String addStudent(StudentTest studentTest);

    StudentTest findById(int sid);

    String update(StudentTest studentTest);

    List<StudentTest> findAll(String page, String limit, Integer sid);

    int countGetAll(Integer sid);
}
