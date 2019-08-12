package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;

@Data
public class TpQueVerification implements Serializable {
    private String yid;
    private String content;
    private String recordId;
    private String isVote;
    private String id;
    public TpQueVerification() {
    }

    public TpQueVerification(String content, String recordId, String isVote, String id) {
        this.content = content;
        this.recordId = recordId;
        this.isVote = isVote;
        this.id = id;
    }
}
