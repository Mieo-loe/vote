package com.gameloft9.demo.dataaccess.model.photo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * 年: 2019
 * 月: 07
 * 日: 12
 * 小时: 09
 * 分钟: 39
 *
 * @author 严脱兔
 */
@Data
public class PhotoModelTest implements Serializable {
    private int mid;
    private String vid;
    private String modelTitle;
    //@JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd")
    private Date startTime;
    private String isTop;

    public PhotoModelTest(String vid, Date startTime, String isTop) {
        this.vid = vid;
        this.startTime = startTime;
        this.isTop = isTop;
    }


    public PhotoModelTest() {
    }
}
