package com.gameloft9.demo.dataaccess.dao.system;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/19 15:02
 * @Description:
 */
public interface TpGradeRubricMapper {

    List<String> findResId(Integer templet_Id);

    List<String> findFraction(Integer templet_Id);

    List<Integer> findRubId(Integer templet_Id);

    boolean delete(Integer templet_Id);

}
