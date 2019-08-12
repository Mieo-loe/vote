package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/14 09:29
 * @Description:
 */
@Data
public class TpGradeRubric implements Serializable {

    private int rubric_Id;

    private int resId;

    private String fraction;
    
    private int templet_Id;

    public TpGradeRubric() {
    }

    public TpGradeRubric(int resId, String fraction, int templet_Id) {
        this.resId = resId;
        this.fraction = fraction;
        this.templet_Id = templet_Id;
    }
}
