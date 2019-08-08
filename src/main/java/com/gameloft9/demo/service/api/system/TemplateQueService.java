package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.CreatingQue;
import com.gameloft9.demo.dataaccess.model.system.OptionQue;
import com.gameloft9.demo.dataaccess.model.system.SubjectQue;
import com.gameloft9.demo.dataaccess.model.system.TemplateQue;

import java.util.List;

public interface TemplateQueService {
    public List<TemplateQue> findAll5(String page, String limit);
    public int getCount5(String tid);
    public Boolean add6_1(TemplateQue templateQue);
    public Boolean update5(String tid);
    public Boolean update5_1(String tid);
    public String getForm(String tid);
    public String getForm4(String qid);
    public CreatingQue getForm1(String cid);
    public List<SubjectQue> getForm2(String cid);
    public List<OptionQue> getForm3(String sid);
    //统计每个选项票数
    public String totalOption(String oid);
}
