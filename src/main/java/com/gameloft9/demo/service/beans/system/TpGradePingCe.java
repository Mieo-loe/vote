package com.gameloft9.demo.service.beans.system;

import lombok.Data;

import java.io.Serializable;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/18 15:37
 * @Description:
 */
@Data
public class TpGradePingCe implements Serializable {

    private String title;

    private String explains;

    private Integer peonum;

    private String []tmarr;

    private String []daarr;

    private String []tm;

    private String []uid;

    public TpGradePingCe() {
    }

    public TpGradePingCe(String title, String explains, Integer peonum, String[] tmarr, String[] daarr, String[] tm, String[] uid) {
        this.title = title;
        this.explains = explains;
        this.peonum = peonum;
        this.tmarr = tmarr;
        this.daarr = daarr;
        this.tm = tm;
        this.uid = uid;
    }
}
