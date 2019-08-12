package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.TpStandard;

import java.util.List;

public interface TpDemocraticstaandrdtService {
    List<TpStandard> findBysubtitleId(int subtitleId);
    List<TpStandard> findBysubtitleId1(int subtitleId);
    int delete(int subtitleId);
}
