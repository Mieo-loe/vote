package com.gameloft9.demo.dataaccess.dao.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.AnswerTest;
import com.gameloft9.demo.dataaccess.model.photovote.Verification;

import java.util.List;


public interface VerificationMapper {
    int add(Verification verification);
    int delete(int hid);
    int deleteBycContent(String content);

//    List<AnswerTest>findAid(int aid);
    int update(Verification verification);
    List<Verification> findByHid(int hid);
    Verification cheakedAccount(String content);

}
