package com.gameloft9.demo.dataaccess.model.photovote;

import lombok.Data;

import java.util.List;

@Data
public class VoteTest {
    private String modelTitle;
    private int vid;
    private String title;
    private String votingInstruction;
    private int votedNum;
    private List<Verification>accounts;
    private List<TitleTest> list;
    private List<Verification>verificationList;

}
