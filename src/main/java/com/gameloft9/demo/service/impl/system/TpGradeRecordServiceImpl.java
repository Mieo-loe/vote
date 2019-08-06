package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.*;
import com.gameloft9.demo.dataaccess.model.system.TpGraderecord;
import com.gameloft9.demo.dataaccess.model.system.TpResourcesList;
import com.gameloft9.demo.service.api.system.TpGradeRecordService;
import com.gameloft9.demo.service.beans.system.PageRange;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/15 14:16
 * @Description:
 */
@Slf4j
@Service
public class TpGradeRecordServiceImpl implements TpGradeRecordService {

    @Autowired
    TpGradeRecordMapper tpGradeRecordMapper;
    @Autowired
    TpGradeRubricMapper tpGradeRubricMapper;
    @Autowired
    TpGradeAnswerMapper tpGradeAnswerMapper;
    @Autowired
    TpGradeEvaluatMapper tpGradeEvaluatMapper;
    @Autowired
    TpGradeTempletMapper tpGradeTempletMapper;
    @Autowired
    TpGradeStatisticsMapper tpGradeStatisticsMapper;


    public List<TpGraderecord> findAll(String page, String limit, Integer record_Id) {

        PageRange pageRange = new PageRange(page, limit);
        return tpGradeRecordMapper.findAll(pageRange.getStart(), pageRange.getEnd(), record_Id);
    }

    public int countGetAll(Integer record_Id) {
        return tpGradeRecordMapper.countGetAll(record_Id);
    }

    public boolean del(Integer record_Id) {
        Integer tempId = tpGradeRecordMapper.findtemid(record_Id);
        tpGradeStatisticsMapper.del(record_Id);
        tpGradeEvaluatMapper.delete(tempId);
        List<Integer> rubId = tpGradeRubricMapper.findRubId(tempId);
        for (int i = 0; i < rubId.size(); i++) {
            tpGradeAnswerMapper.delete(rubId.get(i));
        }
        tpGradeRubricMapper.delete(tempId);
        tpGradeRecordMapper.delete(tempId);
        tpGradeTempletMapper.del(tempId);
        return tpGradeRecordMapper.del(record_Id);
    }

    public TpGraderecord findByRecord_Id(Integer record_Id) {
        return tpGradeRecordMapper.findByRecord_Id(record_Id);
    }

    public boolean updateStatus(TpGraderecord tpGraderecord) {
        return tpGradeRecordMapper.updateStatus(tpGraderecord);
    }

    public List<TpResourcesList> getStatus() {
        List<TpResourcesList> Statuslist = new ArrayList<TpResourcesList>();
        Statuslist = tpGradeRecordMapper.getStatus();
        return Statuslist;
    }

    public boolean addjilu(TpGraderecord tpGraderecord) {
        return tpGradeRecordMapper.addjilu(tpGraderecord);
    }

    public Integer findRecId(Integer templet_Id) {
        return tpGradeRecordMapper.findRecId(templet_Id);
    }

    public Integer findtemid(Integer record_Id) {
        return tpGradeRecordMapper.findtemid(record_Id);
    }
}
