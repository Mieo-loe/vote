package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpQueAccountMapper;
import com.gameloft9.demo.dataaccess.model.system.*;
import com.gameloft9.demo.service.api.system.TpQueAccountService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Slf4j
@Service
@Transactional
public class TpQueAccountServiceImpl implements TpQueAccountService {
    @Autowired
    private TpQueAccountMapper accountMapper;

    public List<TpQueVerification> findAccount(String content) {
        return accountMapper.findAccount(content);
    }

    public List<TpQueVerification> getAccount(String recordId) {
        return accountMapper.getAccount(recordId);
    }
}
