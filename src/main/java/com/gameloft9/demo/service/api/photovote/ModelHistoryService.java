package com.gameloft9.demo.service.api.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.ModelManagerTest;

import java.util.List;

public interface ModelHistoryService {
    List<ModelManagerTest>findAll(String page,String limit);
    public Boolean delete(int mid);
    int countGetAll();
    ModelManagerTest getById(int mid);
    int addModel(ModelManagerTest modelManagerTest);
    int findVid(int mid);
    int editTop1(int mid);
    int editTop2(int mid);

}
