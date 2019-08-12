package com.gameloft9.demo.dataaccess.model.system;

import com.fasterxml.jackson.annotation.JsonFormat;
import javafx.scene.chart.PieChart;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/15 11:26
 * @Description:
 */
@Data
public class TpGraderecord implements Serializable {

    private int record_Id;

    private String templet_Id;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    private Date r_time;

    private String resId;

    public TpGraderecord(int record_Id, String templet_Id, Date r_time, String resId) {
        this.record_Id = record_Id;
        this.templet_Id = templet_Id;
        this.r_time = r_time;
        this.resId = resId;
    }

    public TpGraderecord() {
    }

    public TpGraderecord(String templet_Id, Date r_time, String resId) {
        this.templet_Id = templet_Id;
        this.r_time = r_time;
        this.resId = resId;
    }
}
