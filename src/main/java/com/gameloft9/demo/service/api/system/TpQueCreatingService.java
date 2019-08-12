package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.*;

import java.util.List;

public interface TpQueCreatingService {
    public Boolean add(TpQueCreating creatingQue);
    public Boolean add3(TpQueSubject subjectQue);
    public Boolean add4(TpQueOption optionQue);
    public Boolean add5(TpQueInvestigation investigationQue);
    public Boolean add6(TpQueTemplate templateQue);
    public TpQueCreating findById(String cid);
    public Boolean addVerification(TpQueVerification verificationQue);
    public List<TpQueVerification> findAccountAll(String qid);
}
