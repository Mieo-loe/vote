package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TemplateQueMapper;
import com.gameloft9.demo.dataaccess.model.system.CreatingQue;
import com.gameloft9.demo.dataaccess.model.system.OptionQue;
import com.gameloft9.demo.dataaccess.model.system.SubjectQue;
import com.gameloft9.demo.dataaccess.model.system.TemplateQue;
import com.gameloft9.demo.service.api.system.TemplateQueService;
import com.gameloft9.demo.service.beans.system.PageRange;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Slf4j
@Service
@Transactional
public class TemplateQueServiceImpl implements TemplateQueService {
    @Resource
    private TemplateQueMapper templateQueMapper;

    public List<TemplateQue> findAll5(String page, String limit) {
        PageRange pageRange = new PageRange(page,limit);
        return templateQueMapper.findAll5(pageRange.getStart(),pageRange.getEnd());
    }

    public int getCount5(String tid) {
        return templateQueMapper.getCount5(tid);
    }

    public Boolean add6_1(TemplateQue templateQue) {
        templateQueMapper.add6_1(templateQue);
        return true;
    }

    public Boolean update5(String tid) {
        templateQueMapper.update5(tid);
        return true;
    }

    public Boolean update5_1(String tid) {
        templateQueMapper.update5_1(tid);
        return true;
    }

    public String getForm(String tid) {
        return templateQueMapper.getForm(tid);
    }

    public String getForm4(String qid) {
        return templateQueMapper.getForm4(qid);
    }

    public CreatingQue getForm1(String cid) {
        return templateQueMapper.getForm1(cid);
    }

    public List<SubjectQue> getForm2(String cid) {
        return templateQueMapper.getForm2(cid);
    }

    public List<OptionQue> getForm3(String sid) {
        return templateQueMapper.getForm3(sid);
    }

    public String totalOption(String oid) {
        return templateQueMapper.totalOption(oid);
    }
}
