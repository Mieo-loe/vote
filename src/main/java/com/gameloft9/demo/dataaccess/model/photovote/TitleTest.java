package com.gameloft9.demo.dataaccess.model.photovote;

import lombok.Data;

import java.util.List;

@Data
public class TitleTest {
    private int tid;
    private int vid;
    private int optionRule;
    private int isChar;
    private List<AnswerTest> answerList;
    private List<ContentTest> contentTest;
}
