package com.gameloft9.demo.service.api.photo;

import com.gameloft9.demo.dataaccess.model.photo.PhotoHistoryTest;

import java.util.List;

/**
 * 年: 2019
 * 月: 07
 * 日: 10
 * 小时: 18
 * 分钟: 14
 *
 * @author 严脱兔
 */
public interface PhotoService {
    public List<PhotoHistoryTest> findAll(String page, String limit);


    public int countGetAll();
}
