package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.*;
import org.springframework.stereotype.Repository;

@Repository
public interface TpQueAccountMapper {
    public TpQueVerification findAccount(String content);
}
