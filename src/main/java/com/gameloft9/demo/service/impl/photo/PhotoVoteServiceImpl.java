package com.gameloft9.demo.service.impl.photo;

import com.gameloft9.demo.dataaccess.dao.photo.PhotoHistoryTestMapper;
import com.gameloft9.demo.dataaccess.dao.photo.PhotoVoteTestMapper;
import com.gameloft9.demo.dataaccess.model.photo.*;
import com.gameloft9.demo.service.api.photo.PhotoHistoryService;
import com.gameloft9.demo.service.api.photo.PhotoVoteService;
import com.gameloft9.demo.service.beans.system.PageRange;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

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
public class PhotoVoteServiceImpl implements PhotoVoteService {
    @Resource
    private PhotoVoteTestMapper photoVoteTestMapper;

    public List<PhotoVoteTest>findAllVote(int vid){
        return photoVoteTestMapper.findAllVote(vid);
    }
    public int addVote( PhotoVoteTest photoVoteTest) {

         //photoVoteTestMapper.addVote(voteBeans2.getPhotoVoteTests().getTitle(),voteBeans2.getPhotoVoteTests().getVotingInstruction(),voteBeans2.getPhotoVoteTests().getVotedNum());
        int vid = photoVoteTestMapper.addVote(photoVoteTest);
        return vid;
    }
    public PhotoVoteTest findById(int vid){
        return photoVoteTestMapper.findById(vid);
    }

    public int addTitle(PhotoTitleTest photoTitleTest) {
        int tid =  photoVoteTestMapper.addTitle(photoTitleTest);
        return tid;
    }

    public int addContent(PhotoContentTest photoContentTest) {
        return photoVoteTestMapper.addContent(photoContentTest);
    }

    public int addAnswer(PhotoAnswerTest photoAnswerTest) {
        int aid = photoVoteTestMapper.addAnswer(photoAnswerTest);
        return aid;
    }

    public int addHistory(PhotoHistoryTest photoHistoryTest) {
        int hid = photoVoteTestMapper.addHistory(photoHistoryTest);
        return hid;
    }


}
