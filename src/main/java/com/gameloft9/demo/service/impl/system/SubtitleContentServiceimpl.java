package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.SubtitleContentMapper;
import com.gameloft9.demo.dataaccess.model.system.TpSubtitleContent;
import com.gameloft9.demo.service.api.system.SubtitleContentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@Transactional
public class SubtitleContentServiceimpl implements SubtitleContentService {
    @Autowired
    SubtitleContentMapper DAO;
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
