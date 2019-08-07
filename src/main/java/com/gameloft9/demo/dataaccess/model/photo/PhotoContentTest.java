package com.gameloft9.demo.dataaccess.model.photo;

import lombok.Data;

import java.io.Serializable;

/**
 * 年: 2019
 * 月: 07
 * 日: 17
 * 小时: 10
 * 分钟: 46
 *
 * @author 严脱兔
 */
@Data
public class PhotoContentTest implements Serializable {
    private int cid;
    private String content;
    private int tid;
}
