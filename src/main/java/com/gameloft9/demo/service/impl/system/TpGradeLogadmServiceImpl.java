package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.SysOperLogTestMapper;
import com.gameloft9.demo.dataaccess.dao.system.TpGradeLogadmMapper;
import com.gameloft9.demo.dataaccess.model.system.SysOperLogTest;
import com.gameloft9.demo.dataaccess.model.system.TpGradeLogadm;
import com.gameloft9.demo.mgrframework.utils.CheckUtil;
import com.gameloft9.demo.service.api.system.SysOperLogService;
import com.gameloft9.demo.service.api.system.TpGradeLogadmService;
import com.gameloft9.demo.service.beans.system.LogBatchDelRequest;
import com.gameloft9.demo.service.beans.system.PageRange;
import com.gameloft9.demo.utils.DateUtil;
import com.gameloft9.demo.utils.UUIDUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Created by gameloft9 on 2017/12/5.
 */
@Service
@Slf4j
public class TpGradeLogadmServiceImpl implements TpGradeLogadmService {

    @Autowired
    TpGradeLogadmMapper tpGradeLogadmMapper;

    /**
     * 插入应用访问日志
     * */
    public int insertOperLog(String username,String IP,String operType){
        Date l_time=new Date();
        TpGradeLogadm log = new TpGradeLogadm(username,l_time,IP,operType);
        return tpGradeLogadmMapper.insertSelective(log);
    }

    /**
     * 获取所有日志
     * */
    public List<TpGradeLogadm> getAll(String page, String limit, String username){
        PageRange pageRange = new PageRange(page,limit);
        return tpGradeLogadmMapper.selectAll(pageRange.getStart(),pageRange.getEnd(),username);
    }

    /**
     * 获取所有日志个数
     * */
    public int countGetAll(String username){
//        //解析日期
//        Date startDate = null,endDate=null;
//        if(StringUtils.isNotBlank(startTime)){
//            startDate = DateUtil.str2Date(startTime);
//        }
//        if(StringUtils.isNotBlank(endTime)){
//            endDate = DateUtil.str2Date(endTime);
//        }
        return tpGradeLogadmMapper.countSelectAll(username);
    }

    /**
     * 根据id删除记录
     * */
    public boolean delete(Integer log_id){
        CheckUtil.notBlank(String.valueOf(log_id),"日志id为空");

        tpGradeLogadmMapper.deleteByPrimaryKey(log_id);
        return true;
    }

    /**
     * 批量删除日志
     * */
    public boolean batchDelete(LogBatchDelRequest request){
        CheckUtil.notNull(request,"批量删除请求参数为空");

//        Date startDate = null;
//        Date endDate =  null;
//        if(StringUtils.isNotBlank(request.getStartTime())){
//            startDate = DateUtil.str2Date(request.getStartTime());
//        }
//        if(StringUtils.isNotBlank(request.getEndTime())){
//            endDate = DateUtil.str2Date(request.getEndTime());
//        }


        if(request.getAllDel()){
            log.info("删除全部查询出来的记录");
            return tpGradeLogadmMapper.deleteByQuery(request.getLoginName());
        }

        if(request.getNotDelIds().size() == 0){
            log.info("仅删除勾选记录");
            return tpGradeLogadmMapper.deleteByList(request.getDelIds());
        }

        log.info("删除全部查询出来的，仅保留未勾选记录");
        return tpGradeLogadmMapper.deleteByMap(request.getLoginName(),request.getOperType(),request.getNotDelIds());
    }

}
