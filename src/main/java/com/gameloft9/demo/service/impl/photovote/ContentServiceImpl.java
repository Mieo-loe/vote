package com.gameloft9.demo.service.impl.photovote;

import com.gameloft9.demo.dataaccess.dao.photovote.ContentMapper;
import com.gameloft9.demo.dataaccess.model.photovote.ContentTest;
import com.gameloft9.demo.service.api.photovote.ContentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Slf4j
@Service
public class ContentServiceImpl implements ContentService {
    @Resource
    private ContentMapper contentDao;
    public int addContent(ContentTest contentTest) {
        return contentDao.addContent( contentTest );
    }

    public int delete(int tid) {
        return contentDao.delete( tid );
    }

    public List<ContentTest> findByTid(int tid) {
        return contentDao.findByTid( tid );
    }
}
