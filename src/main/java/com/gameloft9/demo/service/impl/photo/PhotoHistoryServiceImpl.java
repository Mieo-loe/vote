package com.gameloft9.demo.service.impl.photo;

import com.gameloft9.demo.dataaccess.dao.photo.PhotoHistoryTestMapper;
import com.gameloft9.demo.dataaccess.model.photo.*;
import com.gameloft9.demo.service.api.photo.PhotoHistoryService;
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
public class PhotoHistoryServiceImpl implements PhotoHistoryService {
    @Resource
    private PhotoHistoryTestMapper photoHistoryTestMapper;

    public PhotoVoteTest findById(int vid){
        return photoHistoryTestMapper.findById(vid);
    }

    public List<PhotoHistoryTest> findAll(String page, String limit) {
        PageRange pageRange = new PageRange(page, limit);
        return photoHistoryTestMapper.findAll(pageRange.getStart(), pageRange.getEnd());
    }
    //统计选项
    public int count(int aid) {
        return photoHistoryTestMapper.count(aid);
    }

    //删除账号
    public int deleteVerification(String content) {
        photoHistoryTestMapper.deleteVerification(content);
        return 1;
    }
    //删除投票的时候删除账号
    public int deleteVer(int hid) {
        photoHistoryTestMapper.deleteVer(hid);
        return 1;
    }

    public int deleteSum(int hid) {
        photoHistoryTestMapper.deleteSum(hid);
        return 1;
    }

    //账号校验
    public VerificationQueTest verification(String content) {

        return photoHistoryTestMapper.verification(content);
    }

    public String addverificationQue(VerificationQueTest verificationQueTest) {
        photoHistoryTestMapper.addverificationQue(verificationQueTest);
        return "success";
    }

    public String addSumbit(PhotoSumTest photoSumTest) {
        photoHistoryTestMapper.addSumbit(photoSumTest);
        return "success";
    }

    public List<PhotoVoteTest>findAllVote(int vid){
        return photoHistoryTestMapper.findAllVote(vid);
    }

    public String addVote(PhotoVoteTest photoVoteTest) {
        photoHistoryTestMapper.addVote(photoVoteTest);
        return "success";
    }

    public int delete(int hid) {
        return  photoHistoryTestMapper.delete(hid);
    }
    public List<PhotoAnswerTest> findByAid(int tid){
        return photoHistoryTestMapper.findByAid(tid);
    }

    public List<PhotoContentTest> findByCid(int tid) {
        return photoHistoryTestMapper.findByCid(tid);
    }

    public int findByVid(int hid){
        return photoHistoryTestMapper.findByVid(hid);
    }
    public List<PhotoTitleTest> findByTid(int vid){
        return  photoHistoryTestMapper.findByTid(vid);
    }

    public int deleteTitle(int tid){
        return  photoHistoryTestMapper.deleteTitle(tid);
    }

    public int deleteAnswer(int aid){

        return photoHistoryTestMapper.deleteAnswer(aid);
    }
    public int deleteVote(int vid){
        return photoHistoryTestMapper.deleteVote(vid);
    }

    public int deleteContent(int cid) {
        return photoHistoryTestMapper.deleteContent(cid);
    }

    public int cancel(int hid) {
        photoHistoryTestMapper.cancel(hid);
        return 1;
    }

    public int countGetAll() {
        return photoHistoryTestMapper.countGetAll();
    }



}
