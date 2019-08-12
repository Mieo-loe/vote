package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/15 11:13
 * @Description:
 */
public interface TpGradeTempletMapper {

    List<TpGradeUser> findAll(@Param("start") int start, @Param("end") int end, @Param("templet_Id") Integer templet_Id);

    int countGetAll(@Param("templet_Id") Integer username);

    boolean del(Integer templet_Id);

    TpGradeUser findByTemplet_Id(Integer templet_Id);

    boolean add(TpGradeTemplet tpGradeTemplet);

    boolean addrub(TpGradeRubric tpGradeRubric);

    boolean addans(TpGradeAnswer tpGradeAnswer);

    boolean addeva(TpGradeEvaluat tpGradeEvaluat);

    TpGradeTemplet findByTid(@Param("templet_Id") Integer templet_Id);

}
