package com.gameloft9.demo.dataaccess.model.system;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

@Data
public class TemplateQue implements Serializable {
    private String tid;
    private String cid;
    private String templateTitle;
    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createTime;
    private String isTop;

    public TemplateQue() {
    }

    public TemplateQue(String cid, Date createTime, String isTop) {
        this.cid = cid;
        this.createTime = createTime;
        this.isTop = isTop;
    }
}
