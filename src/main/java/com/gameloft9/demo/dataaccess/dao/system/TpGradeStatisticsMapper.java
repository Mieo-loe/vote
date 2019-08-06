package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.TpGradeStatistics;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/24 14:04
 * @Description:
 */
public interface TpGradeStatisticsMapper {

    boolean addSta(TpGradeStatistics tpGradeStatistics);

    List<Integer> getAnsId(int record_Id);

    boolean del(int record_Id);
}
