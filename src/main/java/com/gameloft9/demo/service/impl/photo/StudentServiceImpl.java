package com.gameloft9.demo.service.impl.photo;

import com.gameloft9.demo.dataaccess.dao.photo.StudentTestMapper;
import com.gameloft9.demo.dataaccess.model.photo.StudentTest;
import com.gameloft9.demo.service.api.photo.StudentService;
import com.gameloft9.demo.service.beans.system.PageRange;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by gameloft9 on 2017/12/6.
 */
@Slf4j
@Service


public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentTestMapper studentTestMapper;

    public List<StudentTest> findAll(String page, String limit, Integer sid) {
        PageRange pageRange = new PageRange(page, limit);
        return studentTestMapper.findAll(pageRange.getStart(), pageRange.getEnd(),sid);

    }

    public int countGetAll(Integer sid) {
        return studentTestMapper.countGetAll(sid);
    }


    public int deleteStudent(int sid) {
        studentTestMapper.deleteStudent(sid);
        return 1;

    }

    public String addStudent(StudentTest studentTest) {
        studentTestMapper.addStudent(studentTest);
        return "success";
    }

    public StudentTest findById(int sid) {
        return studentTestMapper.findById(sid);
    }

    public String update(StudentTest studentTest) {
        studentTestMapper.update(studentTest);
        return "success";
    }


}
