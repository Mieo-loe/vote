package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;
@Data
public class OptionQue implements Serializable {
    private String oid;
    private String options;
    private String sid;
    private String totalNum;
    public OptionQue() {
    }

    public OptionQue(String oid) {
        this.oid = oid;
    }

    public OptionQue(String options, String sid) {
        this.options = options;
        this.sid = sid;
    }
}
