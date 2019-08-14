package com.gameloft9.demo.dataaccess.model.photovote;

import lombok.Data;

@Data
public class Verification {
    private int yid;
    private String content;
    private int recordId;
    private String isVote;
    private int id;
}
