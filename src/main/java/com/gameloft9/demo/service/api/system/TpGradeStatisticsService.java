package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.TpGradeStatistics;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/24 14:10
 * @Description:
 */
public interface TpGradeStatisticsService {

    boolean addSta(TpGradeStatistics tpGradeStatistics);

    List<Integer> getAnsId(Integer record_Id);

}
