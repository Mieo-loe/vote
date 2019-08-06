package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.TpGradeAdm;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/10 16:33
 * @Description:
 */
public interface TpGradeAdmMapper {

    TpGradeAdm findByAId(@Param("admId") Integer admId);

    List<TpGradeAdm> getAll(@Param("start") int start, @Param("end") int end, @Param("admId") Integer admId);

    int countGetAll(@Param("admId") Integer admId);

    boolean addmuban(TpGradeAdm tp_grade_adm);

    boolean delete(int admId);

    boolean deletebytid(int templet_Id);

    boolean zhiding(TpGradeAdm tp_grade_adm);

    Integer getTemId(Integer admId);

    Integer getadmId(Integer templet_Id);

}
