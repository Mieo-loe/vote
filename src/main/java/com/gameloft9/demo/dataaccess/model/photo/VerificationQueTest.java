package com.gameloft9.demo.dataaccess.model.photo;

import lombok.Data;

/**
 * 年: 2019
 * 月: 08
 * 日: 03
 * 小时: 10
 * 分钟: 39
 *
 * @author 严脱兔
 */
@Data
public class VerificationQueTest {
    private int yid;
    private String id;
    private String content;
    private int recordId;
    private String isVote;

    public VerificationQueTest(String id, String content, int recordId, String isVote) {
        this.id = id;
        this.content = content;
        this.recordId = recordId;
        this.isVote = isVote;
    }

    public VerificationQueTest() {
    }
}
