package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpGradeStatisticsMapper;
import com.gameloft9.demo.dataaccess.model.system.TpGradeStatistics;
import com.gameloft9.demo.service.api.system.TpGradeStatisticsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/24 14:11
 * @Description:
 */
@Slf4j
@Service
public class TpGradeStatisticsServiceImpl implements TpGradeStatisticsService {

    @Autowired
    TpGradeStatisticsMapper tpGradeStatisticsMapper;

    public boolean addSta(TpGradeStatistics tpGradeStatistics) {
        return tpGradeStatisticsMapper.addSta(tpGradeStatistics);
    }

    public List<Integer> getAnsId(Integer record_Id) {
        return tpGradeStatisticsMapper.getAnsId(record_Id);
    }

}
