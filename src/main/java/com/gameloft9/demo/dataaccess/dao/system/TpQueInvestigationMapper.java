package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.TpQueInvestigation;
import com.gameloft9.demo.dataaccess.model.system.TpQueTotal;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface TpQueInvestigationMapper {
    public List<TpQueInvestigation> findAll2(@Param("start") int start, @Param("end") int end);
    public int getCount2(String qid);
    public Boolean add2(TpQueInvestigation investigationQue);
    public Boolean addTotal(TpQueTotal totalQue);
    //整套历史表多表删除-->
    public Boolean delete2_6(String qid);
    public Boolean delete2(String qid);
    public Boolean delete2_4(String qid);
    public Boolean delete2_1(String history);
    public Boolean delete2_2(String sid);
    public Boolean delete2_3(String cid);
    public Set<String> findById4(String qid);
    public String findById2(String qid);
    //<--
    //整套模板表多表删除-->
    public String findById7(String tid);
    public List<String> findById8(String cid);
    public Boolean delete8_1(String sid);
    public Boolean delete8_2(String cid);
    public Boolean delete8_3(String tid);
    public Boolean delete8_4(String cid);
    //<--
    public Boolean update2(String qid);
    public List<String> getTotal(String qid);
    //删除提交过的账号
    public Boolean delete9(String content);
}
