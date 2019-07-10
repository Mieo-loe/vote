package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.Tp_Grade_Adm;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/10 16:33
 * @Description:
 */
public interface Tp_Grade_AdmMapper {

    List<Tp_Grade_Adm> findAll();

    boolean add(Tp_Grade_Adm tp_grade_adm);

    boolean delete(int adm_Id);

    boolean update(Tp_Grade_Adm tp_grade_adm);

    Tp_Grade_Adm findByAdm_Id(int adm_Id);


}
