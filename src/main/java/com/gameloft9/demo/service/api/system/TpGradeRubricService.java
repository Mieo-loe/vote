package com.gameloft9.demo.service.api.system;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/19 15:10
 * @Description:
 */
public interface TpGradeRubricService {

    List<String> findResId(Integer templet_Id);

    List<String> findFraction(Integer templet_Id);

    List<Integer> findRubId(Integer templet_Id);

}
