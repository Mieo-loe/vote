package com.gameloft9.demo.service.impl.photovote;

import com.gameloft9.demo.dataaccess.dao.photovote.SumMapper;
import com.gameloft9.demo.dataaccess.model.photovote.SumTest;
import com.gameloft9.demo.service.api.photovote.SumService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Slf4j
@Service
public class SumServiceImpl implements SumService {
    @Resource
    SumMapper sumDao;
    public int add(SumTest sumTest) {
        return sumDao.add( sumTest );
    }

    public int sumAid(int aid) {
        return sumDao.sumAid( aid );
    }
}
