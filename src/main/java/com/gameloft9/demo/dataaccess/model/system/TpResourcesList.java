package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/11 21:03
 * @Description:
 */
@Data
public class TpResourcesList implements Serializable {

    private int id;

    private String resKind;

    private int resNum;

    private String resName;

    public TpResourcesList() {
    }

    public TpResourcesList(String resKind, int resNum, String resName) {
        this.resKind = resKind;
        this.resNum = resNum;
        this.resName = resName;
    }

    public TpResourcesList(String resKind, String resName) {
        this.resKind = resKind;
        this.resName = resName;
    }

    public TpResourcesList(String resKind, int resNum) {
        this.resKind = resKind;
        this.resNum = resNum;
    }
}
