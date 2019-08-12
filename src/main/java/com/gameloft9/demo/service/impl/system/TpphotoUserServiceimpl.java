package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpphotoUserMapper;
import com.gameloft9.demo.dataaccess.model.system.TpPhotoUser;
import com.gameloft9.demo.service.api.system.TpphotoUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@Transactional
public class TpphotoUserServiceimpl implements TpphotoUserService {
    @Autowired
    TpphotoUserMapper dao;


    public List<TpPhotoUser> findAllUser() {

        return dao.findAllUser();
    }

    public TpPhotoUser findbyuid(int uid) {

        return dao.findbyuid(uid);
    }
}
