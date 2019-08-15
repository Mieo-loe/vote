package com.gameloft9.demo.dataaccess.dao.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.SumTest;
import com.gameloft9.demo.dataaccess.model.photovote.VoteTest;

public interface SumMapper {
    int add(SumTest sumTest);
//    int delete(int vid);
//    VoteTest findById(int vid);
    int sumAid(int aid);
}
