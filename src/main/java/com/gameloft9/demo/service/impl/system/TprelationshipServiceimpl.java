package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TprelationshipMapper;
import com.gameloft9.demo.dataaccess.model.system.Tprelationship;
import com.gameloft9.demo.service.api.system.TprelationshipService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@Transactional
public class TprelationshipServiceimpl implements TprelationshipService {
    @Autowired
    TprelationshipMapper dao;

    public int delete(int subtitleId) {
        return dao.delete(subtitleId);
    }

    public List<Tprelationship> findBysId(int subtitleId) {
        return dao.findBysId(subtitleId);
    }
}
