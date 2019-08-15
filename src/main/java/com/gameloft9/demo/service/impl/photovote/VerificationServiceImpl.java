package com.gameloft9.demo.service.impl.photovote;

import com.gameloft9.demo.dataaccess.dao.photovote.VerificationMapper;
import com.gameloft9.demo.dataaccess.model.photovote.Verification;
import com.gameloft9.demo.service.api.photovote.VerificationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Slf4j
@Service
public class VerificationServiceImpl implements VerificationService {
    @Resource
    VerificationMapper verificationDao;

    public int add(Verification verification) {
        return verificationDao.add( verification );
    }

    public int delete(int hid) {
        return verificationDao.delete( hid );
    }

    public int update(Verification verification) {
        return verificationDao.update( verification );
    }

    public List<Verification> findByHid(int hid) {
        return verificationDao.findByHid( hid );
    }

    public Verification cheakedAccount(String content) {

        return verificationDao.cheakedAccount( content );
    }

    public int deleteBycContent(String content) {
        return verificationDao.deleteBycContent( content );
    }
}
