package com.gameloft9.demo.dataaccess.dao.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.AnswerTest;

import java.util.List;


public interface AnswerMapper {
    int addAnswer(AnswerTest answerTest);
    int delete(int aid);
    int deleteByTid(int tid);

    List<AnswerTest>findAid(int aid);
}
