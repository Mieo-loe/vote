package com.gameloft9.demo.service.impl.photo;

import com.gameloft9.demo.dataaccess.dao.photo.VerificationQueTestMapper;
import com.gameloft9.demo.dataaccess.model.photo.VerificationQueTest;
import com.gameloft9.demo.service.api.photo.VerificationQueService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * 年: 2019
 * 月: 08
 * 日: 03
 * 小时: 10
 * 分钟: 42
 *
 * @author 严脱兔
 */
@Service
@Transactional
public class VerificationQueServiceImpl implements VerificationQueService {
    @Resource
    private VerificationQueTestMapper verificationQueTestMapper;

    public String addverificationQue(VerificationQueTest verificationQueTest) {
        verificationQueTestMapper.addverificationQue(verificationQueTest);
        return null;
    }
}
