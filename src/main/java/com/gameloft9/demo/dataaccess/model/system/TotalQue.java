package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class TotalQue implements Serializable {
    private String toid;
    private String oid;
    private String qid;
    private List<OptionQue> oids;
    private String content;
    public TotalQue() {
    }

    public TotalQue(String oid, String qid) {
        this.oid = oid;
        this.qid = qid;
    }

}
