package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.CreatingQueMapper;
import com.gameloft9.demo.dataaccess.model.system.*;
import com.gameloft9.demo.service.api.system.CreatingQueService;
import com.gameloft9.demo.service.beans.system.PageRange;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Slf4j
@Service
@Transactional
public class CreatingQueServiceImpl implements CreatingQueService{
    @Resource
    private CreatingQueMapper creatingQueMapper;

    public Boolean add(CreatingQue creatingQue) {
        creatingQueMapper.add(creatingQue);
        return true;
    }

    public Boolean add3(SubjectQue subjectQue) {
        creatingQueMapper.add3(subjectQue);
        return true;
    }

    public Boolean add4(OptionQue optionQue) {
        creatingQueMapper.add4(optionQue);
        return true;
    }
    public Boolean add5(InvestigationQue investigationQue) {
        creatingQueMapper.add5(investigationQue);
        return true;
    }

    public Boolean add6(TemplateQue templateQue) {
        creatingQueMapper.add6(templateQue);
        return true;
    }

    public CreatingQue findById(String cid) {
        return creatingQueMapper.findById(cid);
    }

    public Boolean addVerification(VerificationQue verificationQue) {
        return creatingQueMapper.addVerification(verificationQue);
    }

    public List<VerificationQue> findAccountAll(String qid) {
        return creatingQueMapper.findAccountAll(qid);
    }
}
