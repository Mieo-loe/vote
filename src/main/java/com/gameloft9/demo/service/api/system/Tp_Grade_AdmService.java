package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.TpGradeAdm;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/10 17:42
 * @Description:
 */

public interface Tp_Grade_AdmService {

    TpGradeAdm findByAId(Integer adm_Id);

    List<TpGradeAdm> getAll(String page, String limit, Integer adm_Id);

    int countGetAll(Integer adm_Id);

//    boolean addmuban(String templet_title);

    boolean delete(int adm_Id);

    boolean zhiding(TpGradeAdm tp_grade_adm);

    Integer getTemId(Integer adm_Id);

}
