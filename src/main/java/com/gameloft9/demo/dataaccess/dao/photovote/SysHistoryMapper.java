package com.gameloft9.demo.dataaccess.dao.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.HistoryTest;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface SysHistoryMapper {

  List<HistoryTest> getAll( @Param("start") int start,
                            @Param("end") int end);
  int countGetAll();
   int  delete(int hid);
    boolean editStatus(int  hid);
   HistoryTest  findById(int hid);
   int addHistory(HistoryTest historyTest);
    int findVid(int hid);
}
