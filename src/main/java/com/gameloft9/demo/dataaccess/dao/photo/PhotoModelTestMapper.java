package com.gameloft9.demo.dataaccess.dao.photo;


import com.gameloft9.demo.dataaccess.model.photo.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 年: 2019
 * 月: 07
 * 日: 12
 * 小时: 09
 * 分钟: 43
 *
 * @author 严脱兔
 */
public interface PhotoModelTestMapper {
     List<PhotoModelTest> findAll2(@Param("start") int start,
                                          @Param("end") int end);

     void cancel(int mid);
     void top(int mid);
     int delete(int mid);
     int deleteVote(int vid);
     int deleteAnswer(int aid);
     int deleteTitle(int tid);
     int deleteContent(int tid);
     int findByVid(int mid);
     List<PhotoTitleTest> findByTid(int vid);
     List<PhotoAnswerTest> findByAid(int tid);
     List<PhotoContentTest> findByCid(int tid);
     int countGetAll();
     int addVote(PhotoVoteTest photoVoteTest);
     int addModel(PhotoModelTest photoModelTest);
     int addContent(PhotoContentTest photoContentTest);
     int addTitle(PhotoTitleTest photoTitleTest);
     int addAnswer(PhotoAnswerTest photoAnswerTest);
     int addHistory(PhotoHistoryTest photoHistoryTest);
}
