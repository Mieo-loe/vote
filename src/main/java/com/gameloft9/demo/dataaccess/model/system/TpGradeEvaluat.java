package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/17 14:14
 * @Description:
 */
@Data
public class TpGradeEvaluat implements Serializable {
    private int evaluat_Id;

    private int uid;

    private int templet_Id;

    public TpGradeEvaluat() {
    }

    public TpGradeEvaluat(int uid, int templet_Id) {
        this.uid = uid;
        this.templet_Id = templet_Id;
    }
}
