package com.gameloft9.demo.dataaccess.dao.system;

import com.gameloft9.demo.dataaccess.model.system.FrameworkQue;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface FrameworkMapper {

    int deleteByPrimaryKey(String fid);

    int insert(FrameworkQue record);

    int insertSelective(FrameworkQue record);

    FrameworkQue selectByPrimaryKey(String fid);

    int updateByPrimaryKeySelective(FrameworkQue record);

    int updateByPrimaryKey(FrameworkQue record);

    /**
     * 获取所有组织机构
     * */
    List<FrameworkQue> getAll();

    /**
     * 获取子机构个数
     * @param superior 父机构id
     * */
    int countChildren(@Param("superior") String superior);

    /**
     * 根据名称获取组织机构
     * @param organization 组织机构名称
     * */
    FrameworkQue getByName(@Param("organization") String organization);

    /**
     * 获取根组织机构
     * */
    FrameworkQue getRoot();

    /**
     * 找到某一层机构最大序号
     * @param superior 机构层级
     * */
    String getMaxOrgCode(@Param("superior") int superior);
}