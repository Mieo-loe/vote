package com.gameloft9.demo.service.beans.system;

import lombok.Data;

import java.io.Serializable;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/14 15:04
 * @Description:
 */
@Data
public class TpGradeUserTest2 implements Serializable {

    private String uid;

    private String position;

    public TpGradeUserTest2() {
    }

    public TpGradeUserTest2(String uid, String position) {
        this.uid = uid;
        this.position = position;
    }
}
