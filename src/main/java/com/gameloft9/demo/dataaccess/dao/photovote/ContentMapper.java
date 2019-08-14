package com.gameloft9.demo.dataaccess.dao.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.ContentTest;
import com.gameloft9.demo.dataaccess.model.photovote.VoteTest;

import java.util.List;

public interface ContentMapper {
    int addContent(ContentTest contentTest);
    int delete (int tid);
    List<ContentTest>findByTid(int tid);
}
