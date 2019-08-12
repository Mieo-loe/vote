package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/14 09:39
 * @Description:
 */
@Data
public class TpGradePhotoUser implements Serializable {

    private int uid;

    private String uname;

    private int sex;

    private int departmentId;

    private int classOfPosition;

    private int position;

    private int gradeOfJudge;

    private int category;

}
