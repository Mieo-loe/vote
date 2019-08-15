package com.gameloft9.demo.service.api.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.TitleTest;

import java.util.List;

public interface TitleService {
    int addTitle(TitleTest titleTest);
    int delete(int tid);
    List<TitleTest> findTid(int vid);
    int deleteByVid(int vid);

}
