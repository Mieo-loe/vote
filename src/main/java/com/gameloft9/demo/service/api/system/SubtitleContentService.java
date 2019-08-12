package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.TpSubtitleContent;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface SubtitleContentService {
    List<TpSubtitleContent> findBybigTitleId(int bigTitleId);
    List<TpSubtitleContent> findBybigTitleId1(int bigTitleId);
    int delete(int bigTitleId);
}
