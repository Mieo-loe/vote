package com.gameloft9.demo.service.impl.photovote;

import com.gameloft9.demo.dataaccess.dao.photovote.TitleMapper;
import com.gameloft9.demo.dataaccess.model.photovote.TitleTest;
import com.gameloft9.demo.service.api.photovote.TitleService;
import lombok.extern.log4j.Log4j;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Slf4j
@Service
public class TitleServiceImpl implements TitleService {
    @Resource
    private TitleMapper titleDao;
    public int addTitle(TitleTest titleTest) {
        return titleDao.addTitle( titleTest );
    }

    public int delete(int tid) {
        return titleDao.delete( tid );
    }

    public List<TitleTest> findTid(int vid) {

        return titleDao.findTid( vid );
    }

    public int deleteByVid(int vid) {
        return titleDao.deleteByVid( vid );
    }
}
