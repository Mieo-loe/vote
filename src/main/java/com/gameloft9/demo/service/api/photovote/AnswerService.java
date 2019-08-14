package com.gameloft9.demo.service.api.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.AnswerTest;

import java.util.List;


public interface AnswerService {
    int addAnswer(AnswerTest answerTest);
    int delete(int aid);
    List<AnswerTest> findAid(int aid);
    int deleteByTid(int tid);

}
