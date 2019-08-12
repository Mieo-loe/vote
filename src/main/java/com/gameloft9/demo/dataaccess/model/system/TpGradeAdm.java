package com.gameloft9.demo.dataaccess.model.system;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/10 16:30
 * @Description:
 */
@Data
public class TpGradeAdm implements Serializable {

    private Integer admId;
    
    private int templet_Id;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    private Date a_time;

    private String templet_title;

    private String res_Id ;

    public TpGradeAdm(){

    }

    public TpGradeAdm(int templet_Id, Date a_time, String templet_title, String res_Id) {
        this.templet_Id = templet_Id;
        this.a_time = a_time;
        this.templet_title = templet_title;
        this.res_Id = res_Id;
    }
}
