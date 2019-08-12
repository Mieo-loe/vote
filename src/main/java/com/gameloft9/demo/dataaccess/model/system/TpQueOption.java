package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;
@Data
public class TpQueOption implements Serializable {
    private String oid;
    private String options;
    private String sid;
    private String totalNum;
    public TpQueOption() {
    }

    public TpQueOption(String oid) {
        this.oid = oid;
    }

    public TpQueOption(String options, String sid) {
        this.options = options;
        this.sid = sid;
    }
}
