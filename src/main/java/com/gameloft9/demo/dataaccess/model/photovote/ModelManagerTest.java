package com.gameloft9.demo.dataaccess.model.photovote;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;
@Data
public class ModelManagerTest {
    private int mid;
    private int vid;
    private String modelTitle;
    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    private Date startTime;
    private int isTop;

    public ModelManagerTest(int vid, String modelTitle, Date startTime, int isTop) {
        this.vid = vid;
        this.modelTitle = modelTitle;
        this.startTime = startTime;
        this.isTop = isTop;
    }

    public ModelManagerTest() {
    }
}
