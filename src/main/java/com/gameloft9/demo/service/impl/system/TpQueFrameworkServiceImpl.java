package com.gameloft9.demo.service.impl.system;

import com.gameloft9.demo.dataaccess.dao.system.TpQueFrameworkMapper;
import com.gameloft9.demo.dataaccess.model.system.TpQueFramework;
import com.gameloft9.demo.dataaccess.model.system.TpQueOrgNodeResponse;
import com.gameloft9.demo.mgrframework.utils.CheckUtil;
import com.gameloft9.demo.service.api.system.TpQueFrameworkService;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

/**
 * 组织机构服务实现类
 * Created by gameloft9 on 2017/12/19.
 */
@Slf4j
@Service
public class TpQueFrameworkServiceImpl implements TpQueFrameworkService {

    @Autowired
    TpQueFrameworkMapper frameworkMapper;

    /**
     * 获取所有组织机构
     */
    public List<TpQueOrgNodeResponse> getAll() {
        List<TpQueFramework> orgList = new LinkedList<TpQueFramework>();
        orgList = frameworkMapper.getAll();

        //转换成树
        return convert2TreeNodes(orgList);
    }
    /**
     * 根据id获取组织机构
     * @param fid 主键
     * */
    public TpQueFramework getById(String fid) {
        CheckUtil.notBlank(fid,"组织机构id为空");

        return frameworkMapper.selectByPrimaryKey(fid);
    }


    /**
     * 更新组织机构
     * @param frameworkQue 组织机构信息
     * */
    public Boolean update(TpQueFramework frameworkQue){
        CheckUtil.notNull(frameworkQue,"组织机构为空");
        CheckUtil.notBlank(frameworkQue.getFid(),"组织机构id为空");
        frameworkMapper.updateByPrimaryKeySelective(frameworkQue);
        return true;
    }

    /**
     * 删除组织机构
     * @param fid 组织机构id
     * */
    public Boolean deleteById(String fid){
        CheckUtil.notBlank(fid,"组织机构id为空");

        //含有子机构不能删除
        int count = frameworkMapper.countChildren(fid);
        CheckUtil.check(count == 0,"含有子机构，不能删除");

        //删除
        frameworkMapper.deleteByPrimaryKey(fid);
        return true;
    }

    /**
     * 添加组织机构
     * @param frameworkQue 组织机构信息
     * */
    public Boolean add(TpQueFramework frameworkQue){
        CheckUtil.notNull(frameworkQue,"组织机构为空");

        //名称不能重复
        TpQueFramework d = frameworkMapper.getByName(frameworkQue.getOrganization());
        CheckUtil.check(d == null,"该组织机构已经存在");

        //根机构只能有一个
        if(StringUtils.isBlank(frameworkQue.getSuperior())){
//            log.info("添加根机构");
            TpQueFramework root = frameworkMapper.getRoot();
            CheckUtil.check(root == null,"请选择父机构");
            frameworkQue.setSuperior(0+"");
            frameworkMapper.insertSelective(frameworkQue);
            return true;
        }
//        log.info("添加子机构");
        TpQueFramework parent = frameworkMapper.selectByPrimaryKey(frameworkQue.getSuperior());
        String fid = parent.getFid();
        frameworkQue.setSuperior(fid);
        frameworkMapper.insertSelective(frameworkQue);
        return true;
    }

    /*************************私有方法区******************************/

    /**
     * 转成树
     *
     * @param orgList 组织机构列表
     */
    private List<TpQueOrgNodeResponse> convert2TreeNodes(List<TpQueFramework> orgList) {
        CheckUtil.notNull(orgList, "组织机构列表为空");
        CheckUtil.check(!orgList.isEmpty(), "组织机构列表为空");

        List<TpQueOrgNodeResponse> res = new LinkedList<TpQueOrgNodeResponse>();

        Iterator<TpQueFramework> it = orgList.iterator();
        while (it.hasNext()) {
            TpQueFramework d = it.next();
            if (d.getSuperior().equals("0")) {//拿到根机构
                TpQueOrgNodeResponse node = new TpQueOrgNodeResponse();
                node.setFid(d.getFid());
                node.setName(d.getOrganization());
                node.setHref("#");
                node.setSpread(false);
                node.setChildren(getChildrenNodes(d.getFid(), orgList));
                res.add(node);
            }
        }

        return res;
    }


    /**
     * 递归获取子节点
     *
     * @param superior 父节点id
     * @param orgList  组织机构列表
     */
    private List<TpQueOrgNodeResponse> getChildrenNodes(String superior, List<TpQueFramework> orgList) {
        List<TpQueOrgNodeResponse> children = new LinkedList<TpQueOrgNodeResponse>();

        Iterator<TpQueFramework> it = orgList.iterator();
        while (it.hasNext()) {
            TpQueFramework t = it.next();
            Boolean s = StringUtils.isNotBlank(t.getSuperior())&&t.getSuperior().equals(superior);
            System.out.println(s);
            if (!t.getSuperior().equals("0")&&
                t.getSuperior().equals(superior)) {
                TpQueOrgNodeResponse node = new TpQueOrgNodeResponse();
                node.setFid(t.getFid());
                node.setName(t.getOrganization());
                node.setHref("#");
                node.setSpread(false);
                node.setChildren(getChildrenNodes(node.getFid(), orgList));
                children.add(node);
            }
        }

        return children;
    }
}
