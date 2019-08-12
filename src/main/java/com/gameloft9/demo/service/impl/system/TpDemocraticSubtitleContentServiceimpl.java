package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpDemocraticSubtitleContentMapper;
import com.gameloft9.demo.dataaccess.model.system.TpSubtitleContent;
import com.gameloft9.demo.service.api.system.TpDemocraticSubtitleContentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@Transactional
public class TpDemocraticSubtitleContentServiceimpl implements TpDemocraticSubtitleContentService {
    @Autowired
    TpDemocraticSubtitleContentMapper DAO;
    public List<TpSubtitleContent> findBybigTitleId(int bigTitleId) {
        return DAO.findBybigTitleId(bigTitleId);
    }

    public List<TpSubtitleContent> findBybigTitleId1(int bigTitleId) {
        return DAO.findBybigTitleId1(bigTitleId);
    }

    public int delete(int bigTitleId) {
        return DAO.delete(bigTitleId);
    }
}
