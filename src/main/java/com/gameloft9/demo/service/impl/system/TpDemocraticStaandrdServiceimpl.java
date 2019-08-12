package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpDemocraticstaandrdtMapper;
import com.gameloft9.demo.dataaccess.model.system.TpStandard;
import com.gameloft9.demo.service.api.system.TpDemocraticstaandrdtService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@Transactional
public class TpDemocraticStaandrdServiceimpl implements TpDemocraticstaandrdtService {
    @Autowired
    TpDemocraticstaandrdtMapper dao;
    public List<TpStandard> findBysubtitleId(int subtitleId) {
        return dao.findBysubtitleId(subtitleId);
    }

    public List<TpStandard> findBysubtitleId1(int subtitleId) {
        return dao.findBysubtitleId1(subtitleId);
    }

    public int delete(int subtitleId) {
        return dao.delete(subtitleId);
    }
}
