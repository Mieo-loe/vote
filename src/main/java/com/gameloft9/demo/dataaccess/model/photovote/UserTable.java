package com.gameloft9.demo.dataaccess.model.photovote;

import lombok.Data;

@Data
public class UserTable {
    private int uid;
    private String uname;
    private String sex;
    private String departmentId;
    private String classOfPosition;
    private String position;
    private String gradeOfJudge;
    private String category;
    private Department department;
}
