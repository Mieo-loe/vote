package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.TpGraderecord;
import com.gameloft9.demo.dataaccess.model.system.TpResourcesList;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/15 11:29
 * @Description:
 */
public interface TpGradeRecordMapper {

    List<TpGraderecord> findAll(@Param("start") int start, @Param("end") int end, @Param("record_Id") Integer record_Id);

    int countGetAll(@Param("record_Id") Integer record_Id);

    boolean del(Integer record_Id);

    TpGraderecord findByRecord_Id(Integer record_Id);

    boolean updateStatus(TpGraderecord tpGraderecord);

    List<TpResourcesList> getStatus();

    boolean addjilu(TpGraderecord tpGraderecord);

    boolean delete(Integer templet_Id);

    Integer findRecId(Integer templet_Id);

    Integer findtemid(Integer record_Id);
}
