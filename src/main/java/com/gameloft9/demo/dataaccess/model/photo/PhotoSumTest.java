package com.gameloft9.demo.dataaccess.model.photo;

import lombok.Data;

import java.util.List;

/**
 * 年: 2019
 * 月: 08
 * 日: 05
 * 小时: 09
 * 分钟: 39
 *
 * @author 严脱兔
 */
@Data
public class PhotoSumTest {
    private int sid;
    private String aid;
    private List<String> aids;
    private int hid;
    private String content;

    public PhotoSumTest(String aid, int hid) {
        this.aid = aid;
        this.hid = hid;
    }

    public PhotoSumTest() {
    }
}
