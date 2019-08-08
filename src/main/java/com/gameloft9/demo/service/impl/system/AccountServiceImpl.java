package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.AccountMapper;
import com.gameloft9.demo.dataaccess.dao.system.CreatingQueMapper;
import com.gameloft9.demo.dataaccess.model.system.*;
import com.gameloft9.demo.service.api.system.AccountService;
import com.gameloft9.demo.service.api.system.CreatingQueService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Slf4j
@Service
@Transactional
public class AccountServiceImpl implements AccountService {
    @Resource
    private AccountMapper accountMapper;

    public VerificationQue findAccount(String content) {
        return accountMapper.findAccount(content);
    }

}
