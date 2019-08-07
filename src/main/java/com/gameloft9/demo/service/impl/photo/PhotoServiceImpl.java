package com.gameloft9.demo.service.impl.photo;

import com.gameloft9.demo.dataaccess.dao.photo.PhotoHistoryTestMapper;
import com.gameloft9.demo.dataaccess.model.photo.PhotoHistoryTest;
import com.gameloft9.demo.service.api.photo.PhotoHistoryService;
import com.gameloft9.demo.service.api.photo.PhotoService;
import com.gameloft9.demo.service.beans.system.PageRange;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * 年: 2019
 * 月: 07
 * 日: 10
 * 小时: 18
 * 分钟: 13
 *
 * @author 严脱兔
 */
@Service
@Transactional
public class PhotoServiceImpl implements PhotoService {
    @Resource
    private PhotoHistoryTestMapper photoHistoryTestMapper;


    public List<PhotoHistoryTest> findAll(String page, String limit) {
        PageRange pageRange = new PageRange(page, limit);
        List<PhotoHistoryTest> list = photoHistoryTestMapper.findAll(pageRange.getStart(), pageRange.getEnd());
        System.out.println(list.size());
        return list;
    }


    public int countGetAll() {
        return photoHistoryTestMapper.countGetAll();
    }



}
