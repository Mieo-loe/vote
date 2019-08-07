package com.gameloft9.demo.dataaccess.dao.photo;

import com.gameloft9.demo.dataaccess.model.photo.*;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * 年: 2019
 * 月: 07
 * 日: 10
 * 小时: 16
 * 分钟: 21
 *
 * @author 严脱兔
 */
@Repository
public interface PhotoVoteTestMapper {
//     void addVote(String title,String votingInstruction,int votedNum);
       int addVote(PhotoVoteTest photoVoteTest);
       int addTitle(PhotoTitleTest photoTitleTest);
       int addAnswer(PhotoAnswerTest photoAnswerTest);
       int addHistory(PhotoHistoryTest photoHistoryTest);
       int addContent(PhotoContentTest photoContentTest);
       PhotoVoteTest findById(int vid);
       List<PhotoVoteTest>findAllVote(int vid);
}
