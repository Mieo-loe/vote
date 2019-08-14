package com.gameloft9.demo.service.impl.photovote;

import com.gameloft9.demo.dataaccess.dao.photovote.ModelHistoryMapper;
import com.gameloft9.demo.dataaccess.model.photovote.ModelManagerTest;
import com.gameloft9.demo.service.api.photovote.ModelHistoryService;
import com.gameloft9.demo.service.beans.system.PageRange;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Slf4j
@Service
public class ModelHistoryServiceImpl implements ModelHistoryService {
    @Resource
    private ModelHistoryMapper modelDao;

    public List<ModelManagerTest> findAll(String page,String limit) {
        PageRange pageRange = new PageRange(page,limit);
        return modelDao.findAll(pageRange.getStart(),pageRange.getEnd());
    }

    public Boolean delete(int mid) {
        modelDao.delete( mid );
        return true;
    }

    public int countGetAll() {
        return modelDao.countGetAll();
    }

    public ModelManagerTest getById(int mid) {
        return modelDao.getById( mid );

    }

    public int addModel(ModelManagerTest modelManagerTest) {
        return modelDao.addModel( modelManagerTest );
    }

    public int findVid(int mid) {
        return modelDao.findVid( mid );
    }

    public int editTop1(int mid) {
        return modelDao.editTop1( mid );
    }

    public int editTop2(int mid) {
        return modelDao.editTop2(mid );
    }
}
