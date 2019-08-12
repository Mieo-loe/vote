package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpQueInvestigationMapper;
import com.gameloft9.demo.dataaccess.model.system.TpQueInvestigation;
import com.gameloft9.demo.dataaccess.model.system.TpQueTotal;
import com.gameloft9.demo.service.api.system.TpQueInvestigationService;
import com.gameloft9.demo.service.beans.system.PageRange;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;
import java.util.Set;

@Slf4j
@Service
@Transactional
public class TpQueInvestigationServiceImpl implements TpQueInvestigationService {
    @Resource
    private TpQueInvestigationMapper investigationQueMapper;

    public List<TpQueInvestigation> findAll2(String page, String limit) {
        PageRange pageRange = new PageRange(page,limit);
        return investigationQueMapper.findAll2(pageRange.getStart(),pageRange.getEnd());
    }

    public int getCount2(String qid){
        return investigationQueMapper.getCount2(qid);
    }

    public Boolean add2(TpQueInvestigation investigationQue) {
        investigationQueMapper.add2(investigationQue);
        return true;
    }

    public Boolean addTotal(TpQueTotal totalQue) {
        investigationQueMapper.addTotal(totalQue);
        return true;
    }

    public Boolean delete2_6(String qid) {
        return investigationQueMapper.delete2_6(qid);
    }

    public Boolean delete2_4(String qid) {
        investigationQueMapper.delete2_4(qid);
        return true;
    }

    public Boolean delete2(String qid) {
        investigationQueMapper.delete2(qid);
        return true;
    }
    public Boolean delete2_1(String history) {
        investigationQueMapper.delete2_1(history);
        return true;
    }

    public Boolean delete2_2(String sid) {
        investigationQueMapper.delete2_2(sid);
        return true;
    }

    public Boolean delete2_3(String cid) {
        investigationQueMapper.delete2_3(cid);
        return true;
    }

    public Set<String> findById4(String qid) {
        return investigationQueMapper.findById4(qid);
    }

    public String findById2(String qid) {
        return investigationQueMapper.findById2(qid);
    }

    public String findById7(String tid) {
        return investigationQueMapper.findById7(tid);
    }

    public List<String> findById8(String cid) {
        return investigationQueMapper.findById8(cid);
    }

    public Boolean delete8_1(String sid) {
        investigationQueMapper.delete8_1(sid);
        return true;
    }

    public Boolean delete8_2(String cid) {
        investigationQueMapper.delete8_2(cid);
        return true;
    }

    public Boolean delete8_3(String tid) {
        investigationQueMapper.delete8_3(tid);
        return true;
    }

    public Boolean delete8_4(String cid) {
        investigationQueMapper.delete8_4(cid);
        return true;
    }

    public Boolean update2(String qid) {
        investigationQueMapper.update2(qid);
        return true;
    }

    public List<String> getTotal(String qid) {
        return investigationQueMapper.getTotal(qid);
    }

    public Boolean delete9(String content) {
        return investigationQueMapper.delete9(content);
    }

}
