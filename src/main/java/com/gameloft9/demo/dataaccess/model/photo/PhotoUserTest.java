package com.gameloft9.demo.dataaccess.model.photo;

import lombok.Data;

import java.io.Serializable;

/**
 * 年: 2019
 * 月: 07
 * 日: 10
 * 小时: 15
 * 分钟: 23
 *
 * @author 严脱兔
 */

@Data
public class PhotoUserTest implements Serializable {
    /**
     * 人员ID
     */
    private int uid;
    /**
     * 人员名字
     */
    private String uname;
    /**
     * 性别
     */
    private String sex;
    /**
     * 部门ID
     */
    private String departmentId;
    /**
     * 职务
     */
    private String classOfPosition;
    /**
     * 职级
     */
    private String position;
    /**
     * 法官等级
     */
    private String gradeOfJudge;
    /**
     * 所属类别
     */
    private String category;

    private PhotoDepartmentTest photoDepartmentTest;
}
