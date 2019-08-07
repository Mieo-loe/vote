package com.gameloft9.demo.dataaccess.model.photo;

import lombok.Data;

import java.io.Serializable;

/**
 * 年: 2019
 * 月: 07
 * 日: 12
 * 小时: 23
 * 分钟: 27
 *
 * @author 严脱兔
 */
@Data
public class StudentTest implements Serializable {
    private int sid;
    private String sname;
    private String sex;
    private String clazz;
    private int password;

    public StudentTest(int sid, String sname, String sex, String clazz, int password) {
        this.sid = sid;
        this.sname = sname;
        this.sex = sex;
        this.clazz = clazz;
        this.password = password;
    }

    public StudentTest(String sname, String sex, String clazz, int password) {
        this.sname = sname;
        this.sex = sex;
        this.clazz = clazz;
        this.password = password;
    }

    public StudentTest() {
    }
}
