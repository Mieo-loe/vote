package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.FrameworkQue;
import com.gameloft9.demo.dataaccess.model.system.OrgNodeResponseQue;
import com.gameloft9.demo.service.beans.system.OrgNodeResponse;

import java.util.List;

/**
 * 组织机构服务
 * Created by gameloft9 on 2017/12/19.
 */
public interface FrameworkService {

    /**
     * 获取所有组织机构
     * */
    List<OrgNodeResponseQue> getAll();

    /**
     * 根据id获取组织机构
     * @param fid 主键
     * */
    FrameworkQue getById(String fid);

    /**
     * 更新组织机构
     * @param org 组织机构信息
     * */
    Boolean update(FrameworkQue org);

    /**
     * 删除组织机构
     * @param fid 组织机构id
     * */
    Boolean deleteById(String fid);

    /**
     * 添加组织机构
     * @param org 组织机构信息
     * */
    Boolean add(FrameworkQue org);

}
