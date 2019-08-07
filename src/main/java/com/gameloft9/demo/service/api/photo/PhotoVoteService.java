package com.gameloft9.demo.service.api.photo;

import com.gameloft9.demo.dataaccess.model.photo.*;

import java.util.List;

/**
 * 年: 2019
 * 月: 07
 * 日: 10
 * 小时: 18
 * 分钟: 14
 *
 * @author 严脱兔
 */
public interface PhotoVoteService {

    /**
     *发布投票
      */
   //  String addVote(String title,String votingInstruction,int votedNum);
       int addVote(PhotoVoteTest photoVoteTest);
       int addTitle(PhotoTitleTest photoTitleTest);
       int addContent(PhotoContentTest photoContentTest);
       int addAnswer(PhotoAnswerTest photoAnswerTest);
       int addHistory(PhotoHistoryTest photoHistoryTest);
       PhotoVoteTest findById(int vid);
       List<PhotoVoteTest> findAllVote(int vid);


}
