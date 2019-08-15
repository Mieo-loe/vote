package com.gameloft9.demo.service.api.photovote;

import com.gameloft9.demo.dataaccess.model.photovote.VoteTest;

public interface VoteService {
    int addVote(VoteTest voteTest);
    int delete(int vid);
    VoteTest findById(int vid);

}
