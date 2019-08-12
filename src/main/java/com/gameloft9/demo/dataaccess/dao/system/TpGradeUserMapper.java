package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.TpGradeUser;
import com.gameloft9.demo.dataaccess.model.system.TpGradePhotoUser;
import com.gameloft9.demo.dataaccess.model.system.TpResourcesList;
import com.gameloft9.demo.service.beans.system.TpGradeUserTest;
import com.gameloft9.demo.service.beans.system.TpGradeUserTest2;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/7/14 10:17
 * @Description:
 */
public interface TpGradeUserMapper {

    List<TpGradeUser> findAll(@Param("start") int start, @Param("end") int end, @Param("username") String username);

    int countGetAll(@Param("username") String username);

    boolean add(TpGradeUser tpGradeUser);

    boolean del(String username);

    TpGradeUserTest findByUsername(String username);

    boolean update(TpGradeUser tpGradeUser);

    boolean updpos(TpGradeUserTest2 userTest2);

    List<TpGradePhotoUser> getUid();

    List<TpResourcesList> getPosition();

}
