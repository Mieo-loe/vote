package com.gameloft9.demo.service.beans.system;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/18 15:37
 * @Description:
 */
@Data
public class TpGradePingCeList implements Serializable {
    
    private int templet_Id;

    private String templet_title;
    
    private String title;

    private String explains;

    private Integer peonum;

    private List<String> tmarr;

    private List<String> daarr;

    private List<String> tm;

    private List<String> uid;


    public TpGradePingCeList() {
    }

    public TpGradePingCeList(int templet_Id, String title, String explains, Integer peonum, List<String> tmarr, List<String> daarr, List<String> tm, List<String> uid) {
        this.templet_Id = templet_Id;
        this.title = title;
        this.explains = explains;
        this.peonum = peonum;
        this.tmarr = tmarr;
        this.daarr = daarr;
        this.tm = tm;
        this.uid = uid;
    }

    public TpGradePingCeList(String title, String explains, Integer peonum, List<String> tmarr, List<String> daarr, List<String> tm, List<String> uid) {
        this.title = title;
        this.explains = explains;
        this.peonum = peonum;
        this.tmarr = tmarr;
        this.daarr = daarr;
        this.tm = tm;
        this.uid = uid;
    }

    public TpGradePingCeList(int templet_Id, String templet_title, String title, String explains, Integer peonum, List<String> tmarr, List<String> daarr, List<String> tm, List<String> uid) {
        this.templet_Id = templet_Id;
        this.templet_title = templet_title;
        this.title = title;
        this.explains = explains;
        this.peonum = peonum;
        this.tmarr = tmarr;
        this.daarr = daarr;
        this.tm = tm;
        this.uid = uid;
    }
}
