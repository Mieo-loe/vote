package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpGradeLogadmMapper;
import com.gameloft9.demo.dataaccess.model.system.TpResourcesList;
import com.gameloft9.demo.service.api.system.LogService;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.ss.formula.functions.T;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/8/6 14:46
 * @Description: 日志记录操作
 */
@Slf4j
@Service
public class LogServiceImpl implements LogService {

    @Autowired
    TpGradeLogadmMapper tpGradeLogadmMapper;

    public String updatememo(String memos) {
        String demo = tpGradeLogadmMapper.selectName(memos);
        if (demo == null || demo.equals("")){
            //添加没有的操作
//            TpResourcesList resourcesList = new TpResourcesList("rizhi",memo);
//            tpGradeLogadmMapper.insertoper(resourcesList);
//            return resourcesList.getId();
            return "250";
        }
        return demo;
    }

    public List<TpResourcesList> getLog() {
        return tpGradeLogadmMapper.getLog("rizhi");
    }

    public boolean addLog(TpResourcesList resourcesList) {
        return tpGradeLogadmMapper.updLog(resourcesList);
    }

    public Integer selectid(TpResourcesList resourcesList) {
        return tpGradeLogadmMapper.selectid(resourcesList);
    }

    public boolean delLog(Integer id) {
        return tpGradeLogadmMapper.delLog(id);
//        return tpGradeLogadmMapper.delLogs(String.valueOf(id));
    }

}
