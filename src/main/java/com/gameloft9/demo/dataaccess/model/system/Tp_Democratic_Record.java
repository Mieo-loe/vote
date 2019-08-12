package com.gameloft9.demo.dataaccess.model.system;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
@Data
public class Tp_Democratic_Record implements Serializable {
    private int recordId;
    private String bigTitleId;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    private Date releaseDate;
    private String id;

    public Tp_Democratic_Record(String bigTitleId, Date releaseDate, String id) {
        this.bigTitleId = bigTitleId;
        this.releaseDate = releaseDate;
        this.id = id;
    }

    public Tp_Democratic_Record() {
    }

    public int getRecordId() {
        return recordId;
    }

    public void setRecordId(int recordId) {
        this.recordId = recordId;
    }
}
