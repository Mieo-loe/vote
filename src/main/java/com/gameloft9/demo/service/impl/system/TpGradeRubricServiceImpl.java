package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpGradeRubricMapper;
import com.gameloft9.demo.service.api.system.TpGradeRubricService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/19 15:10
 * @Description:
 */
@Slf4j
@Service
public class TpGradeRubricServiceImpl implements TpGradeRubricService {

    @Autowired
    TpGradeRubricMapper tpGradeRubricMapper;

    public List<String> findResId(Integer templet_Id) {
        return tpGradeRubricMapper.findResId(templet_Id);
    }

    public List<String> findFraction(Integer templet_Id) {
        return tpGradeRubricMapper.findFraction(templet_Id);
    }

    public List<Integer> findRubId(Integer templet_Id) {
        return tpGradeRubricMapper.findRubId(templet_Id);
    }
}
