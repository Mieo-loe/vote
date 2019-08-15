package com.gameloft9.demo.service.api.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.AnswerTest;
import com.gameloft9.demo.dataaccess.model.photovote.Verification;

import java.util.List;


public interface VerificationService {
    int add(Verification verification);
    int delete(int hid);
//    List<AnswerTest> findAid(int aid);
//    int deleteByTid(int tid);
    int update (Verification verification);
    List<Verification> findByHid(int hid);
    Verification cheakedAccount(String content);
    int deleteBycContent(String content);



}
