package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.TpGraderecord;
import com.gameloft9.demo.dataaccess.model.system.TpResourcesList;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/15 14:14
 * @Description:
 */
public interface TpGradeRecordService {

    List<TpGraderecord> findAll(String page, String limit, @Param("record_Id") Integer record_Id);

    int countGetAll(Integer record_Id);

    boolean del(Integer record_Id);

    TpGraderecord findByRecord_Id(Integer record_Id);

    boolean updateStatus(TpGraderecord tpGraderecord);

    List<TpResourcesList> getStatus();

    boolean addjilu(TpGraderecord tpGraderecord);

    Integer findRecId(Integer templet_Id);

    Integer findtemid(Integer record_Id);

}
