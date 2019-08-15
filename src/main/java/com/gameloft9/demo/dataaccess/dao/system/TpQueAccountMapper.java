package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TpQueAccountMapper {
    public List<TpQueVerification> findAccount(String content);
    public List<TpQueVerification> getAccount(String recordId);
}
