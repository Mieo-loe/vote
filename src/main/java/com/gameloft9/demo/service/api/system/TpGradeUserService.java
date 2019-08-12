package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.TpGradeUser;
import com.gameloft9.demo.dataaccess.model.system.TpPhotoUser;
import com.gameloft9.demo.dataaccess.model.system.TpResourcesList;
import com.gameloft9.demo.service.beans.system.TpGradeUserTest;
import com.gameloft9.demo.service.beans.system.TpGradeUserTest2;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/14 10:41
 * @Description:
 */
public interface TpGradeUserService {

    List<TpGradeUser> findAll(String page, String limit, @Param("username") String username);

    int countGetAll(String username);

    String add(TpGradeUser tpGradeUser);

    boolean del(String username);

    TpGradeUserTest findByUsername(String username);

    boolean update(TpGradeUser tpGradeUser);

    boolean updpos(TpGradeUserTest2 userTest2);

    List<TpPhotoUser> getUid();

    List<TpResourcesList> getPosition();

    List<Double> clsj(List<String> uid,List<String> resId,List<String> price);

}
