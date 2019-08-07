package com.gameloft9.demo.dataaccess.dao.photo;

import com.gameloft9.demo.dataaccess.model.photo.*;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

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
public interface PhotoHistoryTestMapper {
     List<PhotoHistoryTest> findAll(@Param("start") int start,
                                          @Param("end") int end);
    List<PhotoVoteTest>findAllVote(int vid);
    void addVote(PhotoVoteTest photoVoteTest);
    void addverificationQue(VerificationQueTest verificationQueTest);
    void addSumbit(PhotoSumTest photoSumTest);
    int delete(int hid);
    //删除投票的时候删除账号
    int deleteVer(int hid);
    //删除统计表数据
    int deleteSum(int hid);
    int deleteVote(int vid);
    int deleteAnswer(int aid);
    int deleteTitle(int tid);
    int deleteContent(int cid);
    //统计选项
    int count(int aid);
    int findByVid(int hid);
    //删除账号
    int deleteVerification(String content);
    //账号校验
    VerificationQueTest verification(String content);
    List<PhotoTitleTest> findByTid(int vid);
    List<PhotoContentTest> findByCid(int tid);
    List<PhotoAnswerTest> findByAid(int tid);
    int countGetAll();
    PhotoVoteTest findById(int vid);

    /**
     * 关闭投票
     * @param hid
     */
    void cancel(int hid);
}
