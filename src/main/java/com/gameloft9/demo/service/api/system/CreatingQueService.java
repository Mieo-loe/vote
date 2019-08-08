package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.*;

import java.util.List;

public interface CreatingQueService {
    public Boolean add(CreatingQue creatingQue);
    public Boolean add3(SubjectQue subjectQue);
    public Boolean add4(OptionQue optionQue);
    public Boolean add5(InvestigationQue investigationQue);
    public Boolean add6(TemplateQue templateQue);
    public CreatingQue findById(String cid);
    public Boolean addVerification(VerificationQue verificationQue);
    public List<VerificationQue> findAccountAll(String qid);
}
