package com.gameloft9.demo.service.impl.photovote;

import com.gameloft9.demo.dataaccess.dao.photovote.VoteMapper;
import com.gameloft9.demo.dataaccess.model.photovote.VoteTest;
import com.gameloft9.demo.service.api.photovote.VoteService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Slf4j
@Service
public class VoteServiceImpl implements VoteService {
    @Resource
    private VoteMapper voteDao;

    public int addVote(VoteTest voteTest) {
        voteDao.addVote( voteTest );
        return 0;
    }

    public int delete(int vid) {
        return voteDao.delete( vid );
    }

    public VoteTest findById(int vid) {
        return voteDao.findById( vid );
    }
}
