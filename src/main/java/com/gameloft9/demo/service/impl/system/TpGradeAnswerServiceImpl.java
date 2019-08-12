package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpGradeAnswerMapper;
import com.gameloft9.demo.service.api.system.TpGradeAnswerService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/19 15:33
 * @Description:
 */
@Slf4j
@Service
public class TpGradeAnswerServiceImpl implements TpGradeAnswerService {

    @Autowired
    TpGradeAnswerMapper tpGradeAnswerMapper;


    public List<String> findPrice(Integer rubric_Id) {
        return tpGradeAnswerMapper.findPrice(rubric_Id);
    }

    public List<Integer> findAnsId(Integer rubric_Id) {
        return tpGradeAnswerMapper.findAnsId(rubric_Id);
    }

    public List<String> getPrice(Integer answer_Id) {
        return tpGradeAnswerMapper.getPrice(answer_Id);
    }

}
