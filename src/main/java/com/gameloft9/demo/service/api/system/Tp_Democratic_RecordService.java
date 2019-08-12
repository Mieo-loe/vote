package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.*;


import java.util.Date;
import java.util.List;

public interface Tp_Democratic_RecordService {
//    List<Tp_Democratic_Record> findAll();
    /**
     * 获取所有角色
     * @param page 页序
     * @param limit 分页大小
     * */
    List<Tp_Democratic_Record> selectAll(String page, String limit);

    /**
     * 获取所有角色个数
     * */
    int countGetAll();
    int insert(Tp_Democratic_Record record);
    int delete(Integer recordId);
    /**
     * 获取角色
     * @param recordId 角色id
     */
    int selectByrecId(Integer recordId);

    /**
     * 更新角色

     * */
//    Boolean update(Integer recordId, String bigTitleId, String releaseDate, String id);
    int guanbi(Integer recordId);

    int addbig(TpBigtitle big);

    int addsubtitle(TpSubtitleContent subtitle);

    int addstandard(TpStandard standard);

    int addsubstandard(TpSubstandard substandard);
    //查看
    int insertpralation(Tprelationship tprelationship);
    //提交
    int insertpralationsub(TpSubtitleid tpSubtitleid);
    //统计
    int findbysid(int substandardId);
}
