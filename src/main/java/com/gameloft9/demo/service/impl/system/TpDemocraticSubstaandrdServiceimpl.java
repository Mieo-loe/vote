package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpDemocraticsubstaandrdtMapper;
import com.gameloft9.demo.dataaccess.model.system.TpSubstandard;
import com.gameloft9.demo.service.api.system.TpDemocraticsubstaandrdtService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@Transactional
public class TpDemocraticSubstaandrdServiceimpl implements TpDemocraticsubstaandrdtService {
    @Autowired
    TpDemocraticsubstaandrdtMapper dao;
    public List<TpSubstandard> findBystandardId(int standardId) {
        return dao.findBystandardId(standardId);
    }

    public List<TpSubstandard> findBystandardId1(int standardId) {
        return dao.findBystandardId1(standardId);
    }

    public int delete(int standardId) {
        return dao.delete(standardId);
    }
}
