package com.gameloft9.demo.dataaccess.dao.system;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/19 15:37
 * @Description:
 */
public interface TpGradeEvaluatMapper {

    List<String> findUid(Integer templet_Id);

    boolean delete(Integer templet_Id);

}
