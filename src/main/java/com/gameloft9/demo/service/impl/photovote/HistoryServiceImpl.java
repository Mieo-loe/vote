package com.gameloft9.demo.service.impl.photovote;

import com.gameloft9.demo.dataaccess.dao.photovote.SysHistoryMapper;
import com.gameloft9.demo.dataaccess.model.photovote.HistoryTest;
import com.gameloft9.demo.service.api.photovote.HistoryService;
import com.gameloft9.demo.service.beans.system.PageRange;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Slf4j
@Service
public class HistoryServiceImpl implements HistoryService {

    @Autowired
    private SysHistoryMapper historyTestMapper;

    public void add(HistoryTest historyTest) {
            historyTestMapper.addHistory( historyTest );
    }

    public Boolean delete(int hid) {
        historyTestMapper.delete( hid );
        return true;
    }

    public List<HistoryTest> getAll(String page, String limit) {
        PageRange pageRange = new PageRange(page,limit);
        return historyTestMapper.getAll(pageRange.getStart(),pageRange.getEnd());
    }


    public int countGetAll() {
        return historyTestMapper.countGetAll();
    }

    public HistoryTest findById(int hid) {
        return historyTestMapper.findById( hid );
    }

    public boolean editStatus(int hid) {
        return historyTestMapper.editStatus( hid );
    }

    public int findVid(int hid) {
        return historyTestMapper.findVid( hid );
    }
}
