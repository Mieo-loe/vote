package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class TpQueCreating implements Serializable {
    private String cid;
    private String title;
    private String explain;
    private String manNum;
    private TpQueInvestigation investigationQue;
    private List<TpQueSubject> timus;
    private String templateTitle;
    private List<String> accounts;

    public TpQueCreating() {
    }

    public TpQueCreating(String cid, String title, String explain, String manNum) {
        this.cid = cid;
        this.title = title;
        this.explain = explain;
        this.manNum = manNum;
    }

    public TpQueCreating(String title, String explain, String manNum) {
        this.title = title;
        this.explain = explain;
        this.manNum = manNum;
    }
}
