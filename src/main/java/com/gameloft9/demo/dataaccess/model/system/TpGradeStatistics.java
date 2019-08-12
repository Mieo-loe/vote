package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/23 15:46
 * @Description:
 */
@Data
public class TpGradeStatistics implements Serializable {

    private int statistics_Id;
    
    private int record_Id;

    private int answer_Id;

    private int uid;

    public TpGradeStatistics() {
    }

    public TpGradeStatistics(int record_Id, int answer_Id, int uid) {
        this.record_Id = record_Id;
        this.answer_Id = answer_Id;
        this.uid = uid;
    }
}
