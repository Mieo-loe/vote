package com.gameloft9.demo.service.api.system;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/19 15:32
 * @Description:
 */

public interface TpGradeAnswerService {

    List<String> findPrice(Integer rubric_Id);

    List<Integer> findAnsId(Integer rubric_Id);

    List<String> getPrice(Integer answer_Id);
}
