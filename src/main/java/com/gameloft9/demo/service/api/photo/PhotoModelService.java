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
public interface PhotoModelService {
    List<PhotoModelTest> findAll2(String page, String limit);


    /**
     * 取消置顶
     */
    int cancel(int mid);

    /**
     * 置顶
     */
    int top(int mid);
    /**
     *投票模板
     */
    int addModel(PhotoModelTest photoModelTest);
    int countGetAll();
    int addVote(PhotoVoteTest photoVoteTest);
    int addTitle(PhotoTitleTest photoTitleTest);
    int addAnswer(PhotoAnswerTest photoAnswerTest);
    int addContent(PhotoContentTest photoContentTest);
    int deleteTitle(int tid);
    int deleteAnswer(int aid);
    int delete(int mid);
    int deleteContent(int tid);
    int deleteVote(int vid);
    int findByVid(int mid);
    List<PhotoTitleTest> findByTid(int vid);
    List<PhotoAnswerTest> findByAid(int tid);
    List<PhotoContentTest> findByCid(int tid);
}
