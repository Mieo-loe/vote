package com.gameloft9.demo.dataaccess.dao.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.VoteTest;

public interface VoteMapper {
    int addVote(VoteTest voteTest);
    int delete(int vid);
    VoteTest findById(int vid);
}
