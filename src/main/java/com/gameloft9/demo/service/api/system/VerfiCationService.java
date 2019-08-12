package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.TpStandard;
import com.gameloft9.demo.dataaccess.model.system.Tp_Democratic_Verification;

import java.util.List;

public interface VerfiCationService {
    boolean addVerification(Tp_Democratic_Verification tp_democratic_verification);
    public Tp_Democratic_Verification findbycontent(String content);
    int delete(String content);
}
