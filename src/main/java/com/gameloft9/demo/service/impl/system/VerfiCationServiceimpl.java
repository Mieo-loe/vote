package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.Tp_Democratic_VerificationMapper;
import com.gameloft9.demo.dataaccess.model.system.Tp_Democratic_Verification;
import com.gameloft9.demo.service.api.system.VerfiCationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@Transactional
public class VerfiCationServiceimpl implements VerfiCationService {
@Autowired
    Tp_Democratic_VerificationMapper dao;
    public boolean addVerification(Tp_Democratic_Verification tp_democratic_verification) {
        return dao.addVerification(tp_democratic_verification);
    }

    public Tp_Democratic_Verification findbycontent(String content) {
        return dao.findbycontent(content);
    }

    public int delete(String content) {
        return dao.delete(content);
    }


}
