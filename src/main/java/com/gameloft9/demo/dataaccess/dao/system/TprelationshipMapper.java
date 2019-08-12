package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.Tprelationship;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TprelationshipMapper {
    int delete (int subtitleId);
    List<Tprelationship> findBysId(int subtitleId);
}
