package com.gameloft9.demo.service.api.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.HistoryTest;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface HistoryService {
    public void add (HistoryTest historyTest);
    public Boolean delete(int hid);
    List<HistoryTest> getAll(String page,String limit);
    int countGetAll();
    HistoryTest findById(int hid);
    boolean editStatus(int hid);
    int findVid(int hid);

}
