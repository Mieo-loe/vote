package com.gameloft9.demo.dataaccess.model.system;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class TpQueInvestigation implements Serializable {
    private String qid;
    private String history;//这是标题ID，关联外键标题ID：cid为外键
    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    private Date startTime;
    private String status;
    private TpQueResourcelist resourcelistQue;
    private TpQueCreating creatingQue;
    public TpQueInvestigation() {
    }

    public TpQueInvestigation(String history, Date startTime, String status) {
        this.history = history;
        this.startTime = startTime;
        this.status = status;
    }
}