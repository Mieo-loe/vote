package com.gameloft9.demo.dataaccess.dao.photo;


import com.gameloft9.demo.dataaccess.model.photo.PhotoHistoryTest;
import com.gameloft9.demo.dataaccess.model.photo.PhotoModelTest;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 年: 2019
 * 月: 07
 * 日: 12
 * 小时: 09
 * 分钟: 43
 *
 * @author 严脱兔
 */
public interface PhotoMapper {
    //查询全部带分页
     List<PhotoHistoryTest> findAll(@Param("start") int start,
                                          @Param("end") int end);
     int countGetAll();
}
