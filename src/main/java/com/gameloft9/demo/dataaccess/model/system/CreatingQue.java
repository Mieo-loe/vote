package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
public class CreatingQue implements Serializable {
    private String cid;
    private String title;
    private String explain;
    private String manNum;
    private InvestigationQue investigationQue;
    private List<SubjectQue> timus;
    private String templateTitle;
    private List<String> accounts;

    public CreatingQue() {
    }

    public CreatingQue(String cid, String title, String explain, String manNum) {
        this.cid = cid;
        this.title = title;
        this.explain = explain;
        this.manNum = manNum;
    }

    public CreatingQue(String title, String explain, String manNum) {
        this.title = title;
        this.explain = explain;
        this.manNum = manNum;
    }
}
