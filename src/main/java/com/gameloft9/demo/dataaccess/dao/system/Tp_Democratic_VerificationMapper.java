package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.Tp_Democratic_Verification;

import java.util.List;

public interface Tp_Democratic_VerificationMapper {
    boolean addVerification(Tp_Democratic_Verification tp_democratic_verification);
    public Tp_Democratic_Verification findbycontent(String content);
    //删除账号
    int delete(String content);
}
