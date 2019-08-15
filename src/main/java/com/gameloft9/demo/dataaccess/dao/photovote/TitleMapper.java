package com.gameloft9.demo.dataaccess.dao.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.TitleTest;
import com.gameloft9.demo.dataaccess.model.photovote.VoteTest;

import java.util.List;

public interface TitleMapper {
    int addTitle(TitleTest titleTest);
    int delete(int tid);
    int deleteByVid(int vid);
    List<TitleTest> findTid(int vid);
}
