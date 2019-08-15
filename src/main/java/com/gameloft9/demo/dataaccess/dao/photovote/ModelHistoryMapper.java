package com.gameloft9.demo.dataaccess.dao.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.ModelManagerTest;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ModelHistoryMapper {
    List<ModelManagerTest> findAll(@Param("start") int start,
                                  @Param("end") int end);
    int countGetAll();
    int  delete(int mid);
    ModelManagerTest getById(int mid);
    int addModel(ModelManagerTest modelManagerTest);
    int findVid(int mid);
    int editTop1(int mid);
    int editTop2(int mid);
}
