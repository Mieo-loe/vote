package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.*;

import java.util.List;

public interface TpQueAccountService {

    public List<TpQueVerification> findAccount(String content);
    public List<TpQueVerification> getAccount(String recordId);
}
