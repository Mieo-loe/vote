package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class TpQueTotal implements Serializable {
    private String toid;
    private String oid;
    private String qid;
    private List<TpQueOption> oids;
    private String content;
    public TpQueTotal() {
    }

    public TpQueTotal(String oid, String qid) {
        this.oid = oid;
        this.qid = qid;
    }

}
