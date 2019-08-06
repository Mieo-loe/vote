package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/20 14:16
 * @Description:
 */
@Data
public class TpDemVerification implements Serializable {

    private int yid;

    private String content;

    private int recordId;

    private String isVote;

    private int id;

    public TpDemVerification(String content, int recordId, String isVote, int id) {
        this.content = content;
        this.recordId = recordId;
        this.isVote = isVote;
        this.id = id;
    }

    public TpDemVerification() {
    }
}
