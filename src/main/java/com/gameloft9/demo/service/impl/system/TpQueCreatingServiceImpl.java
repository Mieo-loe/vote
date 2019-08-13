package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpQueCreatingMapper;
import com.gameloft9.demo.dataaccess.model.system.*;
import com.gameloft9.demo.service.api.system.TpQueCreatingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Slf4j
@Service
@Transactional
public class TpQueCreatingServiceImpl implements TpQueCreatingService {
    @Autowired
    private TpQueCreatingMapper creatingQueMapper;

    public Boolean add(TpQueCreating creatingQue) {
        creatingQueMapper.add(creatingQue);
        return true;
    }

    public Boolean add3(TpQueSubject subjectQue) {
        creatingQueMapper.add3(subjectQue);
        return true;
    }

    public Boolean add4(TpQueOption optionQue) {
        creatingQueMapper.add4(optionQue);
        return true;
    }
    public Boolean add5(TpQueInvestigation investigationQue) {
        creatingQueMapper.add5(investigationQue);
        return true;
    }

    public Boolean add6(TpQueTemplate templateQue) {
        creatingQueMapper.add6(templateQue);
        return true;
    }

    public TpQueCreating findById(String cid) {
        return creatingQueMapper.findById(cid);
    }

    public Boolean addVerification(TpQueVerification verificationQue) {
        return creatingQueMapper.addVerification(verificationQue);
    }

    public List<TpQueVerification> findAccountAll(String qid) {
        return creatingQueMapper.findAccountAll(qid);
    }
}
