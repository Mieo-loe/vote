package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.SysOperLogTest;
import com.gameloft9.demo.dataaccess.model.system.TpGradeLogadm;
import com.gameloft9.demo.service.beans.system.LogBatchDelRequest;

import java.util.List;

/**
 * @Auther: 帅气的达
 * @Date: 2019/8/6 12:35
 * @Description:
 */
public interface TpGradeLogadmService {
    /**
     * 插入应用访问日志
     * */
    int insertOperLog(String username,String IP,String operType);

    /**
     * 获取所有日志
     * */
    List<TpGradeLogadm> getAll(String page, String limit, String username);

    /**
     * 获取所有日志个数
     * */
    int countGetAll(String username);

    /**
     * 根据id删除记录
     * */
    boolean delete(Integer log_id);

    /**
     * 批量删除日志
     * */
    boolean batchDelete(LogBatchDelRequest request);
}
