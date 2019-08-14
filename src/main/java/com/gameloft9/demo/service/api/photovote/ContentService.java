package com.gameloft9.demo.service.api.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.ContentTest;

import java.util.List;

public interface ContentService {
    int addContent(ContentTest contentTest);
    int delete (int tid);
    List<ContentTest> findByTid(int tid);

}
