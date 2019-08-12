package com.gameloft9.demo.service.api.system;

import com.gameloft9.demo.dataaccess.model.system.TpQueFramework;
import com.gameloft9.demo.dataaccess.model.system.TpQueOrgNodeResponse;

import java.util.List;

/**
 * 组织机构服务
 * Created by gameloft9 on 2017/12/19.
 */
public interface TpQueFrameworkService {

    /**
     * 获取所有组织机构
     * */
    List<TpQueOrgNodeResponse> getAll();

    /**
     * 根据id获取组织机构
     * @param fid 主键
     * */
    TpQueFramework getById(String fid);

    /**
     * 更新组织机构
     * @param org 组织机构信息
     * */
    Boolean update(TpQueFramework org);

    /**
     * 删除组织机构
     * @param fid 组织机构id
     * */
    Boolean deleteById(String fid);

    /**
     * 添加组织机构
     * @param org 组织机构信息
     * */
    Boolean add(TpQueFramework org);

}
