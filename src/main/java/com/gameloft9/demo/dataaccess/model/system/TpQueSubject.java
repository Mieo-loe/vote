package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
public class TpQueSubject implements Serializable {
    private String sid;
    private String question;
    private String oid;
    private String option;
    private List<TpQueOption> xuanxiang;

    public TpQueSubject() {
    }

    public TpQueSubject(String question, String oid, String option) {
        this.question = question;
        this.oid = oid;
        this.option = option;
    }
}
