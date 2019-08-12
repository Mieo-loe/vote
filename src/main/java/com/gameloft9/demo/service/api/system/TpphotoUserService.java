package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.TpphotoUser;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TpphotoUserService {
    List<TpphotoUser> findAllUser();


    /**
     * 获取所有个数
     * */

    TpphotoUser findbyuid(int uid);
}
