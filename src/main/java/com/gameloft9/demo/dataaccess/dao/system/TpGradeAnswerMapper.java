package com.gameloft9.demo.dataaccess.dao.system;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/19 15:28
 * @Description:
 */
public interface TpGradeAnswerMapper {

    List<String> findPrice(int rubric_Id);

    boolean delete(Integer rubric_Id);

    List<Integer> findAnsId(int rubric_Id);

    List<String> getPrice(int answer_Id);
}
