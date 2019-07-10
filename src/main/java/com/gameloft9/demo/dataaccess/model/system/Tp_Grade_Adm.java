package com.gameloft9.demo.dataaccess.model.system;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/10 16:30
 * @Description:
 */
@Data
public class Tp_Grade_Adm {

    private int adm_Id;
    
    private int templet_Id;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    private Date a_time;

    private String templet_title;

    private int resId;
}
