package com.gameloft9.demo.service.beans.system;

import lombok.Data;

import java.io.Serializable;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/18 18:07
 * @Description:
 */
@Data
public class TpGradeMuBan implements Serializable {

    private String title;

    private String explains;

    private Integer peonum;

    private String []tmarr;

    private String []daarr;

    private String []tm;

    private String []uid;
    
    private String templet_title;

    private Integer templet_Id;


}
