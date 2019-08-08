package com.gameloft9.demo.dataaccess.model.system;

import lombok.Data;

import java.io.Serializable;
import java.util.LinkedList;
import java.util.List;

/**
 * 返回给layui前端的tree node
 * Created by gameloft9 on 2017/12/19.
 */
@Data
public class OrgNodeResponseQue implements Serializable{

    /**id*/
    private String fid;
    /**名称*/
    private String name;
    /**链接-暂时未用到*/
    private String href;
    /**是否展开*/
    private boolean spread;
    /**树路径*/
    private String path;
    /**子节点*/
    private List<OrgNodeResponseQue> children;

    /**
     * 构造函数
     * */
    public OrgNodeResponseQue(){
        this.children = new LinkedList<OrgNodeResponseQue>();
    }
}
