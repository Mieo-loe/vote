package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.CreatingQue;
import com.gameloft9.demo.dataaccess.model.system.OptionQue;
import com.gameloft9.demo.dataaccess.model.system.SubjectQue;
import com.gameloft9.demo.dataaccess.model.system.TemplateQue;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TemplateQueMapper {
    public List<TemplateQue> findAll5(@Param("start") int start, @Param("end") int end);
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
