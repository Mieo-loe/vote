package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountMapper {
    public VerificationQue findAccount(String content);
}
