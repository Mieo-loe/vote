package com.gameloft9.demo.dataaccess.model.system;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @Auther: 帅气的达
 * @Date: 2019/8/6 12:18
 * @Description:
 */
@Data
public class TpGradeLogadm implements Serializable {
    
    private int log_id;

    private String username;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    private Date l_time;

    private String ip;

    private String operType;

    public TpGradeLogadm(String username, Date l_time, String ip, String operType) {
        this.username = username;
        this.l_time = l_time;
        this.ip = ip;
        this.operType = operType;
    }

    public TpGradeLogadm() {
    }
}
