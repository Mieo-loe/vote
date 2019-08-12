package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpQueAccountMapper;
import com.gameloft9.demo.dataaccess.model.system.*;
import com.gameloft9.demo.service.api.system.TpQueAccountService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

@Slf4j
@Service
@Transactional
public class TpQueAccountServiceImpl implements TpQueAccountService {
    @Resource
    private TpQueAccountMapper accountMapper;

    public TpQueVerification findAccount(String content) {
        return accountMapper.findAccount(content);
    }

}
