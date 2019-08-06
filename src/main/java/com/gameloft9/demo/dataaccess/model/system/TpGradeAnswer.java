package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/14 09:32
 * @Description:
 */
@Data
public class TpGradeAnswer implements Serializable {

    private int answer_Id;

    private int resId;
    
    private int rubric_Id;

    private String price;

    public TpGradeAnswer() {
    }

    public TpGradeAnswer(int resId, int rubric_Id, String price) {
        this.resId = resId;
        this.rubric_Id = rubric_Id;
        this.price = price;
    }
}
