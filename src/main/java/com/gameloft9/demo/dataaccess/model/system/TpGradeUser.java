package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/14 09:38
 * @Description:
 */
@Data
public class TpGradeUser implements Serializable {

    private String username;

    private String uid;

    private String tel;

    private String password;

    public TpGradeUser(String username, String uid, String tel, String password) {
        this.username = username;
        this.uid = uid;
        this.tel = tel;
        this.password = password;
    }

    public TpGradeUser() {
    }
}
