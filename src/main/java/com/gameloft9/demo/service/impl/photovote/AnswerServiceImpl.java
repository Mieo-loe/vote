package com.gameloft9.demo.service.impl.photovote;

import com.gameloft9.demo.dataaccess.dao.photovote.AnswerMapper;
import com.gameloft9.demo.dataaccess.model.photovote.AnswerTest;
import com.gameloft9.demo.service.api.photovote.AnswerService;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Slf4j
@Service
public class AnswerServiceImpl implements AnswerService {
    @Resource
    private AnswerMapper answerDao;

    public int addAnswer(AnswerTest answerTest) {
        return answerDao.addAnswer( answerTest );
    }

    public int delete(int aid) {
        return answerDao.delete( aid );
    }

    public List<AnswerTest> findAid(int tid) {
        return answerDao.findAid( tid );
    }

    public int deleteByTid(int tid) {
        return answerDao.deleteByTid( tid );
    }
}
