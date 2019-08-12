package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/11 21:11
 * @Description:
 */
@Data
public class TpGradeTemplet implements Serializable {

    private int templet_Id;

    private String title;

    private String explains;

    private int peonum;

    public TpGradeTemplet(String title, String explains, int peonum) {
        this.title = title;
        this.explains = explains;
        this.peonum = peonum;
    }

    public TpGradeTemplet() {

    }
}
