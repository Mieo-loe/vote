package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.TpphotoUser;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TpphotoUserMapper {
    List<TpphotoUser> findAllUser();
    TpphotoUser findbyuid(int uid);
}
