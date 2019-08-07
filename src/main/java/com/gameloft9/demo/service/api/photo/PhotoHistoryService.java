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
public interface PhotoHistoryService {
     //查询全部
     List<PhotoHistoryTest> findAll(String page, String limit);
     //统计选项
     int count(int aid);
     //删除账号
     int deleteVerification(String content);
     //删除投票的时候删除账号
     int deleteVer(int hid);
     //删除统计表数据
     int deleteSum(int hid);
     //账号校验
     VerificationQueTest verification(String content);
     //生成账号
     String addverificationQue(VerificationQueTest verificationQueTest);
     //提交
     String addSumbit(PhotoSumTest photoSumTest);

     PhotoVoteTest findById(int vid);
     /**
      *发布投票
      */
     String addVote(PhotoVoteTest photoVoteTest);
     int delete(int hid);
     int deleteTitle(int tid);
     int deleteAnswer(int aid);
     int deleteVote(int vid);
     int deleteContent(int cid);
     int findByVid(int hid);
     List<PhotoTitleTest> findByTid(int vid);
     List<PhotoAnswerTest> findByAid(int tid);
     List<PhotoContentTest> findByCid(int tid);
     /**
      * 关闭投票
      * @param hid
      * @return
      */
     int cancel(int hid);
     int countGetAll();
}
