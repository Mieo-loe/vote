package com.gameloft9.demo.dataaccess.model.photo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.sql.Time;
import java.util.Date;
import java.util.List;

/**
 * 年: 2019
 * 月: 07
 * 日: 10
 * 小时: 16
 * 分钟: 18
 *
 * @author 严脱兔
 */
@Data
public class PhotoHistoryTest implements Serializable {
    private int hid;
    private String vid;
    //pattern = "yyyy-MM-dd HH:mm:ss"显示全部时间
   // @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd")
    private Date issueTime;
    private String status;
    private ResourcesListTest resourcesListTest;
    private PhotoVoteTest photoVoteTest;


    public PhotoHistoryTest(String vid, Date issueTime, String status) {
        this.vid = vid;
        this.issueTime = issueTime;
        this.status = status;
    }

    public PhotoHistoryTest() {
    }
}
