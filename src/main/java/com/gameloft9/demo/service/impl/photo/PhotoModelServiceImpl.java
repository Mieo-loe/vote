package com.gameloft9.demo.service.impl.photo;

import com.gameloft9.demo.dataaccess.dao.photo.PhotoHistoryTestMapper;
import com.gameloft9.demo.dataaccess.dao.photo.PhotoModelTestMapper;
import com.gameloft9.demo.dataaccess.model.photo.*;
import com.gameloft9.demo.service.api.photo.PhotoModelService;
import com.gameloft9.demo.service.beans.system.PageRange;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * 年: 2019
 * 月: 07
 * 日: 10
 * 小时: 18
 * 分钟: 13
 *
 * @author 严脱兔
 */
@Service
@Transactional
public class PhotoModelServiceImpl implements PhotoModelService {
    @Resource
    private PhotoModelTestMapper photoModelTestMapper;

    public List<PhotoModelTest> findAll2(String page, String limit) {
        PageRange pageRange = new PageRange(page, limit);
        return photoModelTestMapper.findAll2(pageRange.getStart(), pageRange.getEnd());
    }

//    public void add(PhotoModelTest photoModelTest) {
//        photoModelTestMapper.add(photoModelTest);
//    }

    public int delete(int mid) {
        photoModelTestMapper.delete(mid);
        return 1;
    }

    public int deleteContent(int tid) {
        return photoModelTestMapper.deleteContent(tid);
    }

    /**
     * 取消置顶
     */
    public int cancel(int mid) {
        photoModelTestMapper.cancel(mid);
        return 1;
    }
    public List<PhotoAnswerTest> findByAid(int tid){
        return photoModelTestMapper.findByAid(tid);
    }

    public List<PhotoContentTest> findByCid(int tid) {
        return photoModelTestMapper.findByCid(tid);
    }

    public int findByVid(int mid){

        return photoModelTestMapper.findByVid(mid);
    }
    public List<PhotoTitleTest> findByTid(int vid){
        return  photoModelTestMapper.findByTid(vid);
    }

    public int deleteTitle(int tid){
        return  photoModelTestMapper.deleteTitle(tid);
    }

    public int deleteAnswer(int aid){

        return photoModelTestMapper.deleteAnswer(aid);
    }
    public int deleteVote(int vid){
        return photoModelTestMapper.deleteVote(vid);
    }
    /**
     * 置顶
     */
    public int top(int mid) {
        photoModelTestMapper.top(mid);
        return 1;
    }

    public int countGetAll() {
        return photoModelTestMapper.countGetAll();
    }

    public int addVote(PhotoVoteTest photoVoteTest) {
        return photoModelTestMapper.addVote(photoVoteTest);
    }

    public int addModel( PhotoModelTest photoModelTest) {

        //photoVoteTestMapper.addVote(voteBeans2.getPhotoVoteTests().getTitle(),voteBeans2.getPhotoVoteTests().getVotingInstruction(),voteBeans2.getPhotoVoteTests().getVotedNum());
        int mid = photoModelTestMapper.addModel(photoModelTest);
        return mid;
    }

    public int addTitle(PhotoTitleTest photoTitleTest) {
        int tid =  photoModelTestMapper.addTitle(photoTitleTest);
        return tid;
    }

    public int addAnswer(PhotoAnswerTest photoAnswerTest) {
        int aid = photoModelTestMapper.addAnswer(photoAnswerTest);
        return aid;
    }

    public int addContent(PhotoContentTest photoContentTest) {
        return photoModelTestMapper.addContent(photoContentTest);
    }

    public int addHistory(PhotoHistoryTest photoHistoryTest) {
        int hid = photoModelTestMapper.addHistory(photoHistoryTest);
        return hid;
    }
}
