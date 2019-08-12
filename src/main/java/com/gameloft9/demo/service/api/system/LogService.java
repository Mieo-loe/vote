package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.TpResourcesList;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/8/6 14:44
 * @Description:
 */
public interface LogService {

    String updatememo(String memo);

    List<TpResourcesList> getLog();

    boolean addLog(TpResourcesList resourcesList);

    Integer selectid(TpResourcesList resourcesList);

    boolean delLog(Integer id);
}
