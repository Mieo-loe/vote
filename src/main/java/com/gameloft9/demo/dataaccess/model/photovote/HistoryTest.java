package com.gameloft9.demo.dataaccess.model.photovote;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;
@Data
public class HistoryTest {
    /**
    主键
     */
    private int hid;

    private String vid;
    /*
    根据vid（发布表的主键）查找标题的内容==历史记录
     */
    private TitleTest titleTest;

    /*
    发布时间
     */
    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    private Date issueTime;
    /*
    发布状态
     */
    private String  status;
    private ResourceTest resourceTest;

    public HistoryTest(String vid, Date issueTime, String status) {
        this.vid = vid;
        this.issueTime = issueTime;
        this.status = status;
    }

    public HistoryTest() {
    }
}
