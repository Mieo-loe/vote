package com.gameloft9.demo.service.beans.system;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

/**
 * 返回给layui前端的菜单树
 * Created by gameloft9 on 2017/12/7.
 */
@Data
public class TpdemoResponse implements Serializable{

    private int recordId;

    private int bigTitleId;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")

    private Date releaseDate;

    private int id;
}
