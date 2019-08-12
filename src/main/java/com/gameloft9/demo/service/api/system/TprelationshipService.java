package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.Tprelationship;

import java.util.List;

public interface TprelationshipService {
    int delete (int subtitleId);
    List<Tprelationship> findBysId(int subtitleId);
}
