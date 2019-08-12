package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpGradeEvaluatMapper;
import com.gameloft9.demo.service.api.system.TpGradeEvaluatService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/19 15:40
 * @Description:
 */
@Slf4j
@Service
public class TpGradeEvaluatServiceImpl implements TpGradeEvaluatService {

    @Autowired
    TpGradeEvaluatMapper tpGradeEvaluatMapper;

    public List<String> findUid(Integer templet_Id) {
        return tpGradeEvaluatMapper.findUid(templet_Id);
    }
}
