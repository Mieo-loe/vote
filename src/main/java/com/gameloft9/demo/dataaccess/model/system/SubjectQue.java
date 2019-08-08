package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
public class SubjectQue implements Serializable {
    private String sid;
    private String question;
    private String oid;
    private String option;
    private List<OptionQue> xuanxiang;

    public SubjectQue() {
    }

    public SubjectQue(String question, String oid, String option) {
        this.question = question;
        this.oid = oid;
        this.option = option;
    }
}
