package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpGradeAdmMapper;
import com.gameloft9.demo.dataaccess.model.system.TpGradeAdm;
import com.gameloft9.demo.service.api.system.Tp_Grade_AdmService;
import com.gameloft9.demo.service.beans.system.PageRange;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/10 17:44
 * @Description:
 */
@Slf4j
@Service
public class Tp_Grade_AdmServiceImpl implements Tp_Grade_AdmService {

    @Autowired
    private TpGradeAdmMapper tp_grade_admMapper;

    public TpGradeAdm findByAId(Integer adm_Id) {

        return tp_grade_admMapper.findByAId(adm_Id);
    }

    public List<TpGradeAdm> getAll(String page, String limit, Integer adm_Id){
        PageRange pageRange = new PageRange(page, limit);

        return tp_grade_admMapper.getAll(pageRange.getStart(), pageRange.getEnd(), adm_Id);
    }

    public int countGetAll(Integer adm_Id) {
        return tp_grade_admMapper.countGetAll(adm_Id);
    }

    public boolean delete(int adm_Id) {
        return tp_grade_admMapper.delete(adm_Id);
    }

    public boolean zhiding(TpGradeAdm tp_grade_adm) {
        return tp_grade_admMapper.zhiding(tp_grade_adm);
    }

    public Integer getTemId(Integer adm_Id) {
        return tp_grade_admMapper.getTemId(adm_Id);
    }


}
